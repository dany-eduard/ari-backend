import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CongregationService } from './congregation.service';
import { CongregationDto } from './dto/congregation.dto';
import { LogAction } from '../log-actions/decorators/log-action.decorator';
import { Action } from '@prisma/client';

@Controller('congregations')
export class CongregationController {
  constructor(private service: CongregationService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  @LogAction({ action: Action.CREATE, entity: 'Congregation' })
  create(@Body() dto: CongregationDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  @LogAction({ action: Action.UPDATE, entity: 'Congregation' })
  update(@Param('id') id: string, @Body() dto: CongregationDto) {
    return this.service.update(+id, dto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  @LogAction({ action: Action.DELETE, entity: 'Congregation' })
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
