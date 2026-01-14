import { Injectable, BadRequestException, ConflictException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TeamDto } from './dto/team.dto';
import { formatName } from 'src/utils/formatName';

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

  findOne(id: number) {
    return this.prisma.team.findUnique({
      where: { id },
      include: {
        congregation: {
          select: {
            name: true,
          },
        },
        people: true,
      },
      omit: { congregation_id: true },
    });
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
