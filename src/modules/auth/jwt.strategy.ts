import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: any) {
    const user = await this.prisma.user.findUnique({
      where: { id: payload.sub },
      include: {
        roles: {
          include: {
            permissions: true,
          },
        },
        congregation: true,
      },
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    // Flatten permissions for easier checking
    const permissions = new Set<string>();
    user.roles.forEach((role) => {
      role.permissions.forEach((permission) => {
        permissions.add(permission.name);
      });
    });

    return {
      ...user,
      permissions: Array.from(permissions),
      roleNames: user.roles.map((r) => r.name),
    };
  }
}
