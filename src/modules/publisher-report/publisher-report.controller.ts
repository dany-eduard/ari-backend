import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PublisherReportService } from './publisher-report.service';
import { PublisherReportDto } from './dto/publisher-report.dto';
import { LogAction } from '../log-actions/decorators/log-action.decorator';
import { Action } from '@prisma/client';
import { RolesGuard } from '../auth/guards/roles.guard';
import { PermissionsGuard } from '../auth/guards/permissions.guard';
import { Permissions } from '../auth/decorators/permissions.decorator';

@UseGuards(AuthGuard('jwt'), RolesGuard, PermissionsGuard)
@Controller('publisher-reports')
export class PublisherReportController {
  constructor(private service: PublisherReportService) {}

  @Post()
  @Permissions('REPORTS_CREATE')
  @LogAction({ action: Action.CREATE, entity: 'PublisherReport' })
  create(@Body() dto: PublisherReportDto) {
    return this.service.create(dto);
  }

  @Get()
  @Permissions('REPORTS_READ')
  findByPerson(
    @Query('person_id') person_id: number,
    @Query('service_year') service_year?: number,
    @Query('year') year?: number,
    @Query('month') month?: number,
    @Query('limit') limit?: number,
    @Query('order') order?: 'asc' | 'desc',
  ) {
    return this.service.findByPerson({ person_id, year, service_year, month, limit, order });
  }

  @Get(':id')
  @Permissions('REPORTS_READ')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Put(':id')
  @Permissions('REPORTS_UPDATE')
  @LogAction({ action: Action.UPDATE, entity: 'PublisherReport' })
  update(@Param('id') id: string, @Body() dto: PublisherReportDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  @Permissions('REPORTS_DELETE')
  @LogAction({ action: Action.DELETE, entity: 'PublisherReport' })
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
