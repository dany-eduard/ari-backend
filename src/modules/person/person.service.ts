import { Injectable, ConflictException } from '@nestjs/common';
import { Prisma } from '../../generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { PersonDto } from './dto/person.dto';

@Injectable()
export class PersonService {
  constructor(private prisma: PrismaService) {}

  async create(data: PersonDto) {
    try {
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

  findAllByCongregation(congregation_id: number, query: { team_id?: number; is_regular_pioneer?: boolean }) {
    const where: any = { congregation_id };
    if (query.team_id) where.team_id = +query.team_id;
    if (typeof query.is_regular_pioneer === 'string') {
      if (query.is_regular_pioneer === 'true') where.is_regular_pioneer = true;
      if (query.is_regular_pioneer === 'false') where.is_regular_pioneer = false;
    } else {
      where.is_regular_pioneer = query.is_regular_pioneer;
    }

    return this.prisma.person.findMany({ where });
  }

  findOne(id: number) {
    return this.prisma.person.findUnique({ where: { id } });
  }

  async update(id: number, data: PersonDto) {
    try {
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
