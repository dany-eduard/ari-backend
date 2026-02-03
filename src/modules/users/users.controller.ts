import { Controller, Post, Param, Body, UseGuards, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/guards/roles.guard';
import { PermissionsGuard } from '../auth/guards/permissions.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@UseGuards(AuthGuard('jwt'), RolesGuard, PermissionsGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post(':id/roles')
  @Roles('admin') // Only admins can add roles
  addRole(@Param('id') id: string, @Body('roleName') roleName: string) {
    return this.usersService.addRoleToUser(+id, roleName);
  }

  @Put(':id/roles')
  @Roles('admin')
  updateRoles(@Param('id') id: string, @Body('roleNames') roleNames: string[]) {
    return this.usersService.updateUserRoles(+id, roleNames);
  }
}
