import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PERMISSIONS_KEY } from '../decorators/permissions.decorator';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredPermissions = this.reflector.getAllAndOverride<string[]>(PERMISSIONS_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredPermissions) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();

    // Admin should have access to everything
    // The seed has an 'ADMIN' permission for the admin role.
    // We can also check if the user has the 'admin' role directly if we want to be explicit.
    if (user.roleNames?.includes('admin')) {
      return true;
    }

    // Check if user has ALL required permissions or AT LEAST ONE?
    // Usually it's AT LEAST ONE for roles, but for permissions it depends.
    // Specifying @Permissions('read', 'write') usually means need BOTH?
    // Or does it mean "can access if has read OR write"?
    // Standard NestJS RBAC examples often use 'some' (at least one).
    // Let's assume 'some' for now. If a route needs multiple specific permissions,
    // we might need a different decorator or logic.
    // But typically for an endpoint like "Create Person", we just need "PERSONS_CREATE".

    return requiredPermissions.some((permission) => user.permissions?.includes(permission));
  }
}
