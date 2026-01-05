import { Injectable, ConflictException } from '@nestjs/common';
import { Prisma } from '../../generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { PublisherReportDto } from './dto/publisher-report.dto';
import { ServiceYearMonths } from 'src/utils/service-year-months.util';

@Injectable()
export class PublisherReportService {
  constructor(private prisma: PrismaService) {}

  async create(data: PublisherReportDto) {
    try {
      const serviceYearMonths = new ServiceYearMonths(data.year);
      const serviceYearMonth = serviceYearMonths.months.find((month) => month.month === data.month);

      return await this.prisma.publisherReport.create({
        data: {
          ...data,
          service_year: serviceYearMonth!.serviceYear,
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException('Ya existe un reporte para este publicador en esta fecha');
        }
      }
      throw error;
    }
  }

  findByPerson({
    person_id,
    service_year,
    year,
    month,
    limit,
    order,
  }: {
    person_id: number;
    service_year?: number;
    year?: number;
    month?: number;
    limit?: number;
    order?: 'asc' | 'desc';
  }) {
    const where: any = { person_id: +person_id };
    if (service_year) where.service_year = +service_year;
    if (year) where.year = +year;
    if (month) where.month = +month;
    return this.prisma.publisherReport.findMany({
      where,
      take: limit && +limit,
      orderBy: [{ year: order === 'desc' ? 'desc' : 'asc' }, { month: order === 'desc' ? 'desc' : 'asc' }],
      omit: { person_id: true },
    });
  }

  findOne(id: number) {
    return this.prisma.publisherReport.findUnique({ where: { id } });
  }

  async update(id: number, data: PublisherReportDto) {
    try {
      const serviceYearMonths = new ServiceYearMonths(data.year);
      const serviceYearMonth = serviceYearMonths.months.find((month) => month.month === data.month);

      return await this.prisma.publisherReport.update({
        where: { id },
        data: {
          ...data,
          service_year: serviceYearMonth!.serviceYear,
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException('Ya existe un reporte para este publicador en esta fecha');
        }
      }
      throw error;
    }
  }

  remove(id: number) {
    return this.prisma.publisherReport.delete({ where: { id } });
  }
}
