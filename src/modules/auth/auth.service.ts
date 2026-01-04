import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const hash = await bcrypt.hash(dto.password, 10);
    console.log({ hash });
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        password: hash,
        first_name: dto.first_name,
        last_name: dto.last_name,
        congregation_id: dto.congregation_id,
      },
    });
    return this.sign(user);
  }

  async validateUser(email: string, password: string, congregation_id: number) {
    const user = await this.prisma.user.findUnique({
      where: { email, congregation_id },
    });
    if (!user) return null;

    const valid = await bcrypt.compare(password, user.password);
    return valid ? user : null;
  }

  sign(user) {
    return {
      access_token: this.jwt.sign({
        sub: user.id,
        congregation_id: user.congregation_id,
        name: user.first_name.trim() + ' ' + user.last_name.trim(),
      }),
    };
  }
}
