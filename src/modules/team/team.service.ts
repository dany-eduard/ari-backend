import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TeamDto } from './dto/team.dto';
import { formatName } from 'src/utils/formatName';

@Injectable()
export class TeamService {
  constructor(private prisma: PrismaService) {}

  create(data: TeamDto) {
    if (data.name) data.name = formatName(data.name);
    return this.prisma.team.create({ data });
  }

  findAll(congregation_id?: number) {
    return this.prisma.team.findMany({ where: { congregation_id } });
  }

  findOne(id: number) {
    return this.prisma.team.findUnique({ where: { id } });
  }

  update(id: number, data: TeamDto) {
    if (data.name) data.name = formatName(data.name);
    return this.prisma.team.update({ where: { id }, data });
  }

  async remove(id: number) {
    const team = await this.prisma.team.findUnique({ where: { id }, include: { people: true } });
    if (team?.people?.length) {
      throw new BadRequestException('No se puede eliminar un equipo si tiene personas');
    }
    return this.prisma.team.delete({ where: { id } });
  }
}
