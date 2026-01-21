import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const hash = await bcrypt.hash(dto.password, 10);
    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          password: hash,
          first_name: dto.first_name,
          last_name: dto.last_name,
          congregation_id: dto.congregation_id,
        },
        include: {
          congregation: {
            select: {
              name: true,
            },
          },
        },
      });
      return this.sign(user as User & { congregation: { name: string } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        throw new ConflictException('El correo electrónico ya está en uso');
      }
      throw error;
    }
  }

  async validateUser(email: string, password: string, congregation_id: number) {
    const user = await this.prisma.user.findUnique({
      where: { email, congregation_id },
      include: { congregation: { select: { name: true } } },
    });
    if (!user) return null;

    const valid = await bcrypt.compare(password, user.password);
    return valid ? (user as User & { congregation: { name: string } }) : null;
  }

  sign(user: User & { congregation: { name: string } }) {
    return {
      access_token: this.jwt.sign({
        sub: user.id,
        email: user.email,
        congregation_id: user.congregation_id,
        full_name: user.first_name.trim() + ' ' + user.last_name.trim(),
      }),
      user: {
        id: user.id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        congregation_id: user.congregation_id,
        congregation: user.congregation.name,
      },
    };
  }
}
