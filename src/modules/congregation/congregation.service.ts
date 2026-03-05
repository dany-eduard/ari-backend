import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CongregationDto } from './dto/congregation.dto';
import { formatName } from 'src/utils/formatName';
import { CongregationQueryDto } from './dto/congregation-query.dto';

@Injectable()
export class CongregationService {
  constructor(private prisma: PrismaService) {}

  create(data: CongregationDto) {
    if (data.name) data.name = formatName(data.name);
    return this.prisma.congregation.create({ data });
  }

  async findAll(query: CongregationQueryDto) {
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 10;
    const search = query.search;
    const includeCount = query.includeCount;
    const skip = (page - 1) * limit;

    const where: any = {};

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { code: { contains: search, mode: 'insensitive' } },
      ];
    }

    const [data, total] = await Promise.all([
      this.prisma.congregation.findMany({
        where,
        skip,
        take: limit,
        orderBy: { name: 'asc' },
        include: {
          _count: includeCount ? { select: { people: true } } : false,
        },
      }),
      this.prisma.congregation.count({ where }),
    ]);

    return {
      data,
      meta: {
        total,
        page,
        last_page: Math.ceil(total / limit),
      },
    };
  }

  findOne(id: number) {
    return this.prisma.congregation.findUnique({ where: { id } });
  }

  update(id: number, data: CongregationDto) {
    if (data.name) data.name = formatName(data.name);
    return this.prisma.congregation.update({ where: { id }, data });
  }

  async remove(id: number) {
    const congregation = await this.prisma.congregation.findUnique({
      where: { id },
      include: {
        _count: { select: { people: true } },
      },
    });

    if (!congregation) {
      throw new BadRequestException('Congregación no encontrada');
    }

    if (congregation._count.people > 0) {
      throw new BadRequestException('No se puede eliminar la congregación porque tiene publicadores asociados');
    }

    return this.prisma.congregation.delete({ where: { id } });
  }
}
