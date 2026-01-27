import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PermissionDto } from './dto/permission.dto';

@Injectable()
export class PermissionsService {
  constructor(private prisma: PrismaService) {}

  create(data: PermissionDto) {
    return this.prisma.permission.create({ data });
  }

  findAll() {
    return this.prisma.permission.findMany();
  }

  findOne(id: number) {
    return this.prisma.permission.findUnique({ where: { id } });
  }

  update(id: number, data: PermissionDto) {
    return this.prisma.permission.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.permission.delete({ where: { id } });
  }
}
