import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CongregationDto } from './dto/congregation.dto';
import { formatName } from 'src/utils/formatName';

@Injectable()
export class CongregationService {
  constructor(private prisma: PrismaService) {}

  create(data: CongregationDto) {
    if (data.name) data.name = formatName(data.name);
    return this.prisma.congregation.create({ data });
  }

  findAll() {
    return this.prisma.congregation.findMany();
  }

  findOne(id: number) {
    return this.prisma.congregation.findUnique({ where: { id } });
  }

  update(id: number, data: CongregationDto) {
    if (data.name) data.name = formatName(data.name);
    return this.prisma.congregation.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.congregation.delete({ where: { id } });
  }
}
