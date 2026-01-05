import { Injectable } from '@nestjs/common';
import { Person } from 'src/generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { PublisherHelper } from './helpers/publisher.helpers';
import { PdfUtil } from './utils/pdf.util';
import { ZipUtil } from './utils/zip.util';

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
  }) {
    const congregation = await this.prisma.congregation.findUnique({
      where: { id: +congregation_id },
      include: {
        people: {
          select: {
            id: true,
            team_id: true,
          },
        },
        teams: true,
      },
    });

    const getPublisherData = async (person: Person) => {
      const { pdfBuffer, data } = await this.publisherServiceYear({ person_id: person.id, service_year });
      // TODO separar precursores regulares y publicadores activos de inactivos
      const isRegular = data!.is_regular_pioneer;
      const isActive = data!.is_active ?? true;
      const teamName = congregation!.teams.find((team) => team.id === person.team_id)?.name;
      const directory = `Registro de publicadores de la congregación ${congregation!.name.trim()} ${service_year}/${isRegular ? 'Precursores' : isActive ? 'Activos' : 'Inactivos'}`;
      const fileName = `${directory}${isRegular ? '' : `/${teamName}`}/${data!.last_name.trim()} ${data!.first_name.trim()} ${service_year}.pdf`;
      return { fileName, buffer: pdfBuffer };
    };

    const { stream } = await this.zipUtil.generateZip(congregation!.people, getPublisherData);
    return { zipStream: stream, congregation: congregation!.name };
  }
}
