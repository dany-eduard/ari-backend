import { Injectable } from '@nestjs/common';
import { Person } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { PublisherHelper } from './helpers/publisher.helpers';
import { PdfUtil } from './utils/pdf.util';
import { ZipUtil, ZipProgress } from './utils/zip.util';
import { CongregationHomeResponseDto } from './dto/reports.dto';

interface ZipStartResult {
  jobId: string;
  congregation: string;
}

@Injectable()
export class ReportsService {
  constructor(
    private pdfUtil: PdfUtil,
    private prisma: PrismaService,
    private publisherHelper: PublisherHelper,
    private zipUtil: ZipUtil,
  ) {}

  async publisherServiceYear({ person_id, service_year }: { person_id: number; service_year: number }) {
    const data = await this.publisherHelper.getPublisherData(+person_id, +service_year);
    const formattedData = this.publisherHelper.mapToPdfData({ ...data, service_year });
    const pdfBuffer = await this.pdfUtil.generatePdf({
      templateHbs: 'src/modules/reports/templates/publisher-report_S-21-S_v11.23.html',
      data: formattedData,
    });
    return { pdfBuffer, data, formattedData };
  }

  async congregationPublishersServiceYear({
    congregation_id,
    service_year,
  }: {
    congregation_id: number;
    service_year: number;
  }): Promise<ZipStartResult> {
    const congregation = await this.prisma.congregation.findUnique({
      where: { id: +congregation_id },
      include: {
        people: {
          omit: {
            congregation_id: true,
            number_phone: true,
          },
          include: {
            congregation: true,
            reports: {
              where: { service_year },
              orderBy: [{ year: 'asc' }, { month: 'asc' }],
              omit: { person_id: true },
            },
          },
        },
        teams: true,
      },
    });

    const getPublisherData = async (person: Person) => {
      try {
        const data = this.publisherHelper.processPublisherData(person, service_year);
        const formattedData = this.publisherHelper.mapToPdfData({ ...data, service_year });

        console.log(`Generating PDF for: ${data!.first_name} ${data!.last_name}`);

        const pdfBuffer = await this.pdfUtil.generatePdf({
          templateHbs: 'src/modules/reports/templates/publisher-report_S-21-S_v11.23.html',
          data: formattedData,
          timeout: 120000,
        });

        const isRegular = data!.is_regular_pioneer;
        const isActive = data!.is_active ?? true;
        const teamName = congregation!.teams.find((team) => team.id === person['team_id'])?.name;
        const directory = `Registro de publicadores de la congregación ${congregation!.name.trim()} ${service_year}/${isRegular ? 'Precursores' : isActive ? 'Activos' : 'Inactivos'}`;
        const fileName = `${directory}${isRegular ? '' : `/${teamName}`}/${data!.last_name.trim()} ${data!.first_name.trim()} ${service_year}.pdf`;

        console.log(`✓ PDF generated successfully for: ${data!.first_name} ${data!.last_name}`);

        return { buffer: pdfBuffer, fileName };
      } catch (error) {
        console.error(`✗ Failed to generate PDF for person ID ${person.id}:`, error.message);
        throw error;
      }
    };

    const jobId = await this.zipUtil.startZipGeneration(congregation!.people, getPublisherData);
    return { jobId, congregation: congregation!.name };
  }

  getZipProgress(jobId: string): ZipProgress | null {
    return this.zipUtil.getProgress(jobId);
  }

  getZipBuffer(jobId: string): Buffer | null {
    return this.zipUtil.getZipBuffer(jobId);
  }

  clearAllZipJobs(): number {
    return this.zipUtil.clearAllJobs();
  }

  getAllZipJobs(): ZipProgress[] {
    return this.zipUtil.getAllJobs();
  }

  async congregationHome({
    congregation_id,
    year,
    month,
  }: {
    congregation_id: number;
    year: number;
    month: number;
  }): Promise<CongregationHomeResponseDto> {
    const congregation = await this.prisma.congregation.findUnique({
      where: { id: +congregation_id },
      include: {
        people: {
          select: {
            id: true,
            is_active: true,
            is_regular_pioneer: true,
            reports: {
              where: {
                month,
                year,
              },
              select: {
                id: true,
                service_year: true,
                year: true,
                month: true,
                participated: true,
                bible_courses: true,
                hours: true,
                is_auxiliary_pioneer: true,
              },
            },
          },
        },
        _count: {
          select: { teams: true },
        },
      },
    });

    const totalActivePeople = congregation!.people.filter((person) => person.is_active).length;
    const registeredReports = congregation!.people.filter((person) => person.reports.length > 0).length;
    const missingReports = totalActivePeople - registeredReports;

    const regularPioneers = congregation!.people.filter((person) => person.is_regular_pioneer);
    const regularPioneersReports = this.calculateSummary(regularPioneers);

    const auxiliaryPioneers = congregation!.people.filter((person) =>
      person.reports.some((report) => report.is_auxiliary_pioneer),
    );
    const auxiliaryPioneersReports = this.calculateSummary(auxiliaryPioneers);

    const publishers = congregation!.people.filter(
      (person) => !person.is_regular_pioneer && !person.reports.some((report) => report.is_auxiliary_pioneer),
    );
    const publishersReports = this.calculateSummary(publishers);

    const response = {
      total_teams: congregation!._count.teams,
      total_people: congregation!.people.length,
      total_active_people: totalActivePeople,
      expected_reports: totalActivePeople,
      registered_reports: registeredReports,
      missing_reports: missingReports,
      summary: {
        publishers: {
          reports: publishersReports.reports,
          bible_courses: publishersReports.bible_courses,
        },
        regular_pioneers: {
          reports: regularPioneersReports.reports,
          bible_courses: regularPioneersReports.bible_courses,
          hours: regularPioneersReports.hours,
        },
        auxiliary_pioneers: {
          reports: auxiliaryPioneersReports.reports,
          bible_courses: auxiliaryPioneersReports.bible_courses,
          hours: auxiliaryPioneersReports.hours,
        },
      },
    };

    return response;
  }

  private calculateSummary(people: any[]) {
    return people.reduce(
      (acc, person) => {
        const [report] = person.reports;
        if (report) {
          acc.reports++;
          acc.bible_courses += report.bible_courses;
          acc.hours += report.hours;
        }
        return acc;
      },
      { reports: 0, bible_courses: 0, hours: 0 },
    );
  }
}
