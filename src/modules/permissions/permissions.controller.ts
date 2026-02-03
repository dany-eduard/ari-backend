import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PermissionsService } from './permissions.service';
import { PermissionDto } from './dto/permission.dto';

@UseGuards(AuthGuard('jwt'))
@Controller('permissions')
export class PermissionsController {
  constructor(private service: PermissionsService) {}

  @Post()
  create(@Body() dto: PermissionDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: PermissionDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
