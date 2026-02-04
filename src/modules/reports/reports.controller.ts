import express from 'express';
import { Controller, Get, Post, Param, Query, Res, StreamableFile, HttpException, HttpStatus } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { PdfUtil } from './utils/pdf.util';

@Controller('reports')
export class ReportsController {
  constructor(
    private service: ReportsService,
    private pdfUtil: PdfUtil,
  ) {}

  @Get('status')
  async getStatus() {
    return this.pdfUtil.getStatus();
  }

  @Get('warmup')
  async warmup() {
    await this.pdfUtil.warmup();
    return { status: 'warmed up' };
  }

  @Post('cleanup')
  async cleanup() {
    await this.pdfUtil.clearCache();
    return { status: 'cache cleared' };
  }

  @Post('zip/clear-all')
  async clearAllZipJobs() {
    const count = this.service.clearAllZipJobs();
    return { status: 'all zip jobs cleared', count };
  }

  @Get('zip/jobs')
  async getAllZipJobs() {
    const jobs = this.service.getAllZipJobs();
    return { jobs, count: jobs.length };
  }

  @Post('restart-browser')
  async restartBrowser() {
    await this.pdfUtil.restartBrowser();
    return { status: 'browser restarted' };
  }

  @Post('zip/generate/:congregation_id/service-year/:service_year')
  async startZipGeneration(
    @Param('congregation_id') congregation_id: number,
    @Param('service_year') service_year: number,
  ) {
    const { jobId, congregation } = await this.service.congregationPublishersServiceYear({
      congregation_id: +congregation_id,
      service_year: +service_year,
    });

    return {
      jobId,
      congregation,
      serviceYear: service_year,
      progressUrl: `/reports/zip/progress/${jobId}`,
      downloadUrl: `/reports/zip/download/${jobId}`,
      message: 'ZIP generation started. Poll progressUrl to check status.',
    };
  }

  @Get('zip/progress/:jobId')
  async getZipProgress(@Param('jobId') jobId: string) {
    const progress = this.service.getZipProgress(jobId);
    if (!progress) {
      throw new HttpException('Job not found', HttpStatus.NOT_FOUND);
    }
    return progress;
  }

  @Get('zip/download/:jobId')
  async downloadZip(@Param('jobId') jobId: string, @Res({ passthrough: true }) res: express.Response) {
    const progress = this.service.getZipProgress(jobId);

    if (!progress) {
      throw new HttpException('Job not found', HttpStatus.NOT_FOUND);
    }

    if (progress.status === 'pending' || progress.status === 'processing') {
      throw new HttpException('ZIP not ready yet. Poll progress endpoint first.', HttpStatus.ACCEPTED);
    }

    if (progress.status === 'failed') {
      throw new HttpException(`ZIP generation failed: ${progress.error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    const zipBuffer = this.service.getZipBuffer(jobId);
    if (!zipBuffer) {
      throw new HttpException('ZIP buffer not available', HttpStatus.NOT_FOUND);
    }

    const fileName = `Registro de publicadores.zip`;
    res.set({
      'Content-Type': 'application/zip',
      'Content-Disposition': `attachment; filename="${fileName}"`,
      'Content-Length': zipBuffer.length.toString(),
    });

    return new StreamableFile(zipBuffer);
  }

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

  @Get('congregations/:congregation_id/home')
  async congregationHome(
    @Param('congregation_id') congregation_id: number,
    @Query('year') year: number,
    @Query('month') month: number,
  ) {
    return this.service.congregationHome({ congregation_id, year: +year, month: +month });
  }
}
