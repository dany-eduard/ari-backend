import express from 'express';
import { Controller, Get, Param, Query, Res, StreamableFile } from '@nestjs/common';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
  constructor(private service: ReportsService) {}

  @Get('publisher/:person_id/service-year/:service_year')
  async publisherServiceYear(
    @Param('person_id') person_id: number,
    @Param('service_year') service_year: number,
    @Res({ passthrough: true }) res: express.Response,
  ): Promise<StreamableFile> {
    const { pdfBuffer, data } = await this.service.publisherServiceYear({ person_id, service_year });

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline; filename="${data?.last_name} ${data?.first_name} ${service_year}.pdf"`,
      'Content-Length': pdfBuffer.length,
    });

    return new StreamableFile(pdfBuffer);
  }

  @Get('congregations/:congregation_id/publishers-service-year/:service_year')
  async congregationPublishersServiceYear(
    @Param('congregation_id') congregation_id: number,
    @Param('service_year') service_year: number,
    @Res({ passthrough: true }) res: express.Response,
  ): Promise<StreamableFile> {
    const { zipStream, congregation } = await this.service.congregationPublishersServiceYear({
      congregation_id,
      service_year,
    });

    res.set({
      'Content-Type': 'application/zip',
      'Content-Disposition': `inline; filename="Registro de publicadores de la congregación ${congregation} ${service_year}.zip"`,
    });

    return new StreamableFile(zipStream);
  }

  @Get('congregations/:congregation_id/home')
  async congregationHome(
    @Param('congregation_id') congregation_id: number,
    @Query('year') year: number,
    @Query('month') month: number,
  ) {
    return this.service.congregationHome({ congregation_id, year: +year, month: +month });
  }
}
