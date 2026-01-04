import { Module } from '@nestjs/common';
import { PublisherReportService } from './publisher-report.service';
import { PublisherReportController } from './publisher-report.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [PublisherReportService, PrismaService],
  controllers: [PublisherReportController],
})
export class PublisherReportModule {}
