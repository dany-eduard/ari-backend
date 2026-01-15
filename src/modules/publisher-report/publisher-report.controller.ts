import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PublisherReportService } from './publisher-report.service';
import { PublisherReportDto } from './dto/publisher-report.dto';

@UseGuards(AuthGuard('jwt'))
@Controller('publisher-reports')
export class PublisherReportController {
  constructor(private service: PublisherReportService) {}

  @Post()
  create(@Body() dto: PublisherReportDto) {
    return this.service.create(dto);
  }

  @Get()
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
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: PublisherReportDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
