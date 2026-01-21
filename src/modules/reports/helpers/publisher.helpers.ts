import { Injectable } from '@nestjs/common';
import { PublisherReport } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { ServiceYearMonths } from 'src/utils/service-year-months.util';

@Injectable()
export class PublisherHelper {
  constructor(private prisma: PrismaService) {}

  async getPublisherData(person_id: number, service_year: number) {
    const person = await this.prisma.person.findUnique({
      where: { id: person_id },
      omit: {
        congregation_id: true,
        team_id: true,
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
    });

    return this.processPublisherData(person, service_year);
  }

  processPublisherData(person: any, service_year: number) {
    const serviceYearMonths = new ServiceYearMonths(service_year - 1);
    const monthsOrdered = serviceYearMonths.monthsOrder;
    const months = serviceYearMonths.months;
    let totalHours = 0;

    if (person?.birth_date) {
      person.birth_date = new Date(person.birth_date).toLocaleDateString('es-CO', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }) as unknown as Date;
    }

    if (person?.baptism_date) {
      person.baptism_date = new Date(person.baptism_date).toLocaleDateString('es-CO', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }) as unknown as Date;
    }

    if (person?.reports) {
      const reportsWithAllMonths = monthsOrdered.map((monthNumber) => {
        const report = person.reports.find((report) => report.month === monthNumber);
        const month = months.find((month) => month.month === monthNumber);
        return (
          report || {
            service_year,
            year: month!.serviceYear - 1,
            month: monthNumber,
            participated: false,
            hours: undefined,
          }
        );
      });

      person.reports = reportsWithAllMonths.map((report) => {
        if (report.participated && report.hours) totalHours += report.hours;
        const monthNameRaw = new Date(report.service_year, report.month - 1).toLocaleDateString('es-CO', {
          month: 'long',
        });
        const monthName = monthNameRaw.charAt(0).toUpperCase() + monthNameRaw.slice(1);
        report.month = monthName as unknown as number;
        return report;
      }) as PublisherReport[];
    }

    if (
      person &&
      totalHours &&
      (person.is_regular_pioneer || person.is_special_pioneer || person.is_field_missionary)
    ) {
      person['total_hours'] = totalHours;
    }

    return person;
  }

  private normalizeMonths(months: PublisherReport[]) {
    return months.map((row) => ({
      name: row.month,
      participated: row?.participated ?? false,
      bibleCourses: row?.bible_courses ?? '',
      auxiliary: row?.is_auxiliary_pioneer ?? false,
      hours: row?.hours ?? '',
      notes: row?.notes ?? '',
    }));
  }

  mapToPdfData(data: any) {
    return {
      name: `${data.first_name.trim()} ${data.last_name.trim()}`,
      birthDate: data.birth_date,
      baptismDate: data.baptism_date,

      isMale: data.sex === 'MALE',
      isFemale: data.sex === 'FEMALE',

      isOther: data.is_other_sheep,
      isOrdained: data.is_anointed,

      isElder: data.is_elder,
      isMinister: data.is_ministerial_servant,
      isRegular: data.is_regular_pioneer,
      isSpecial: data.is_special_pioneer,
      isMissionary: data.is_field_missionary,

      serviceYear: data.service_year,
      months: this.normalizeMonths(data.reports),

      totalHours: data.total_hours,
    };
  }
}
