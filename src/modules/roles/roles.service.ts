import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RoleDto } from './dto/role.dto';

@Injectable()
export class RolesService {
  constructor(private prisma: PrismaService) {}

  create(data: RoleDto) {
    const { permissionIds, ...roleData } = data;
    return this.prisma.role.create({
      data: {
        ...roleData,
        permissions: {
          connect: permissionIds?.map((id) => ({ id })) || [],
        },
      },
      include: {
        permissions: true,
      },
    });
  }

  findAll() {
    return this.prisma.role.findMany({
      include: {
        permissions: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.role.findUnique({
      where: { id },
      include: {
        permissions: true,
      },
    });
  }

  update(id: number, data: RoleDto) {
    const { permissionIds, ...roleData } = data;
    return this.prisma.role.update({
      where: { id },
      data: {
        ...roleData,
        permissions: {
          set: permissionIds?.map((id) => ({ id })) || [],
        },
      },
      include: {
        permissions: true,
      },
    });
  }

  remove(id: number) {
    return this.prisma.role.delete({ where: { id } });
  }
}
