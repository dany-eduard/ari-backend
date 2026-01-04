import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email', passReqToCallback: true });
  }

  async validate(req: any, email: string, password: string): Promise<any> {
    const congregationId = +req.body.congregation_id;
    const user = await this.authService.validateUser(email, password, congregationId);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
