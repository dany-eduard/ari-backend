import { Injectable, ConflictException } from '@nestjs/common';
import { Prisma } from '../../generated/prisma/client';
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
}
