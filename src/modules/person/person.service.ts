import { Injectable, ConflictException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { PersonDto } from './dto/person.dto';
import { formatName } from 'src/utils/formatName';
import { ServiceYearMonths } from 'src/utils/service-year-months.util';
import { setFlagLastReport } from 'src/utils/set-flag-last-report.util';

@Injectable()
export class PersonService {
  constructor(private prisma: PrismaService) {}

  async create(data: PersonDto) {
    try {
      if (data.first_name) data.first_name = formatName(data.first_name);
      if (data.last_name) data.last_name = formatName(data.last_name);
      if (data.birth_date) data.birth_date = new Date(data.birth_date);
      if (data.baptism_date) data.baptism_date = new Date(data.baptism_date);
      return await this.prisma.person.create({ data });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException('Ya existe una persona con estos datos en la congregación');
        }
      }
      throw error;
    }
  }

  async findAllByCongregation(congregation_id: number, query: { team_id?: number; is_regular_pioneer?: boolean }) {
    const where: any = { congregation_id };
    if (query.team_id) where.team_id = +query.team_id;
    if (typeof query.is_regular_pioneer === 'string') {
      if (query.is_regular_pioneer === 'true') where.is_regular_pioneer = true;
      if (query.is_regular_pioneer === 'false') where.is_regular_pioneer = false;
    } else {
      where.is_regular_pioneer = query.is_regular_pioneer;
    }

    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();
    const serviceYearMonths = new ServiceYearMonths(currentYear);
    const moonthOrdered = serviceYearMonths.monthsOrder;
    const serviceYear = serviceYearMonths.getServiceYear(currentMonth);

    const people = await this.prisma.person.findMany({
      where,
      include: {
        reports: {
          where: {
            service_year: serviceYear,
          },
          select: {
            month: true,
            service_year: true,
          },
          take: 1,
          orderBy: [{ year: 'desc' }, { month: 'desc' }],
        },
      },
    });

    return setFlagLastReport(people, { moonthOrdered, currentMonth, serviceYear });
  }

  findOne(id: number) {
    return this.prisma.person.findUnique({ where: { id } });
  }

  async update(id: number, data: PersonDto) {
    try {
      if (data.first_name) data.first_name = formatName(data.first_name);
      if (data.last_name) data.last_name = formatName(data.last_name);
      if (data.birth_date) data.birth_date = new Date(data.birth_date);
      if (data.baptism_date) data.baptism_date = new Date(data.baptism_date);
      return await this.prisma.person.update({ where: { id }, data });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException('Ya existe una persona con estos datos en la congregación');
        }
      }
      throw error;
    }
  }

  remove(id: number) {
    return this.prisma.person.delete({ where: { id } });
  }

  async syncCongregationPublishersStatus(congregation_id: number) {
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();
    const serviceYearMonths = new ServiceYearMonths(currentYear);
    const serviceYear = serviceYearMonths.getServiceYear(currentMonth);
    const monthsOrder = serviceYearMonths.monthsOrder;
    const currentMonthIndex = monthsOrder.indexOf(currentMonth);

    const people = await this.prisma.person.findMany({
      where: { congregation_id },
      select: {
        id: true,
        first_name: true,
        last_name: true,
        is_active: true,
        reports: {
          where: { service_year: serviceYear },
          orderBy: [{ year: 'desc' }, { month: 'desc' }],
          take: 3,
          select: { month: true, participated: true },
        },
      },
    });

    const toActivate: { id: number; name: string }[] = [];
    const toDeactivate: { id: number; name: string }[] = [];

    for (const person of people) {
      let shouldBeActive = true;

      // Only check for inactivity if at least 3 months have passed in the current logical timeline
      // currentMonthIndex starts at 0 (Sept).
      // We need to check indices: currentMonthIndex-1, currentMonthIndex-2, currentMonthIndex-3.
      // So we need currentMonthIndex >= 3 (meaning current is Dec (index 3) or later.
      // If current is Dec (3), we check Nov(2), Oct(1), Sept(0).

      if (currentMonthIndex >= 3) {
        const last3MonthsIndices = [currentMonthIndex - 1, currentMonthIndex - 2, currentMonthIndex - 3];

        const hasRecentActivity = last3MonthsIndices.some((monthIndex) => {
          const monthVal = monthsOrder[monthIndex];
          // Check if there is ANY report for this month that has participated = true
          const strictReport = person.reports.find((r) => r.month === monthVal);

          // If report exists and participated is true, then they were active this month.
          if (strictReport && strictReport.participated) {
            return true;
          }
          return false;
        });

        // If NO recent activity in ANY of the last 3 months, they should be inactive.
        if (!hasRecentActivity) {
          shouldBeActive = false;
        }
      }

      if (shouldBeActive && !person.is_active) {
        toActivate.push({ id: person.id, name: `${person.first_name} ${person.last_name}`.trim() });
      } else if (!shouldBeActive && person.is_active) {
        toDeactivate.push({ id: person.id, name: `${person.first_name} ${person.last_name}`.trim() });
      }
    }

    if (toActivate.length > 0) {
      // INFO: Comentado porque se debe realizar la actualización manualmente
      // await this.prisma.person.updateMany({
      //   where: { id: { in: toActivate.map((p) => p.id) } },
      //   data: { is_active: true },
      // });
    }

    if (toDeactivate.length > 0) {
      await this.prisma.person.updateMany({
        where: { id: { in: toDeactivate.map((p) => p.id) } },
        data: { is_active: false },
      });
    }

    return {
      to_activate: toActivate,
      to_deactivate: toDeactivate,
    };
  }
}
