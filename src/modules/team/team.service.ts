import { Injectable, BadRequestException, ConflictException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TeamDto } from './dto/team.dto';
import { formatName } from 'src/utils/formatName';
import { setFlagLastReport } from 'src/utils/set-flag-last-report.util';
import { ServiceYearMonths } from 'src/utils/service-year-months.util';

@Injectable()
export class TeamService {
  constructor(private prisma: PrismaService) {}

  async create(data: TeamDto) {
    if (data.name) data.name = formatName(data.name);
    try {
      return await this.prisma.team.create({ data });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('Ya existe un grupo con este nombre');
      }
      throw error;
    }
  }

  findAll(congregation_id?: number) {
    return this.prisma.team.findMany({
      where: { congregation_id },
      include: {
        people: {
          select: {
            is_active: true,
            is_regular_pioneer: true,
          },
        },
      },
      omit: { congregation_id: true },
      orderBy: { name: 'asc' },
    });
  }

  async findOne(id: number) {
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();
    const serviceYearMonths = new ServiceYearMonths(currentYear);
    const serviceYear = serviceYearMonths.getServiceYear(currentMonth);

    console.log(serviceYear);

    const team = await this.prisma.team.findUnique({
      where: { id },
      include: {
        congregation: {
          select: {
            name: true,
          },
        },
        people: {
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
        },
      },
      omit: { congregation_id: true },
    });

    setFlagLastReport(team!.people, {
      moonthOrdered: serviceYearMonths.monthsOrder,
      currentMonth,
      serviceYear,
    });

    return team;
  }

  async update(id: number, data: TeamDto) {
    if (data.name) data.name = formatName(data.name);
    try {
      return await this.prisma.team.update({ where: { id }, data });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('Ya existe un grupo con este nombre');
      }
      throw error;
    }
  }

  async remove(id: number) {
    const team = await this.prisma.team.findUnique({ where: { id }, include: { people: true } });
    if (team?.people?.length) {
      throw new BadRequestException('No se puede eliminar un equipo si tiene personas');
    }
    return this.prisma.team.delete({ where: { id } });
  }
}
