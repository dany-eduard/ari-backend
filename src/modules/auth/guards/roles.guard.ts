import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();

    // Check if user has "admin" role, which bypasses other role checks if you want
    // But usually admin is just another role. Let's check strict match.
    // However, the user request says "admin: puede realizar cualquier acción en el sistema".
    // So if user has "admin" role, they should probably pass.
    if (user.roleNames?.includes('admin')) {
      return true;
    }

    return requiredRoles.some((role) => user.roleNames?.includes(role));
  }
}
