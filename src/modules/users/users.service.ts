import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async addRoleToUser(userId: number, roleName: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const role = await this.prisma.role.findUnique({ where: { name: roleName } });
    if (!role) {
      throw new NotFoundException('Role not found');
    }

    return this.prisma.user.update({
      where: { id: userId },
      data: {
        roles: {
          connect: { id: role.id },
        },
      },
      include: {
        roles: true,
      },
    });
  }

  async updateUserRoles(userId: number, roleNames: string[]) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const roles = await this.prisma.role.findMany({
      where: {
        name: { in: roleNames },
      },
    });

    if (roles.length !== roleNames.length) {
      throw new NotFoundException('Some roles not found');
    }

    return this.prisma.user.update({
      where: { id: userId },
      data: {
        roles: {
          set: roles.map((role) => ({ id: role.id })),
        },
      },
      include: {
        roles: true,
      },
    });
  }
}
