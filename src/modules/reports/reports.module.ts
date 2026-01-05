import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PublisherHelper } from './helpers/publisher.helpers';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import { PdfUtil } from './utils/pdf.util';
import { ZipUtil } from './utils/zip.util';

@Module({
  providers: [ReportsService, PublisherHelper, PdfUtil, PrismaService, ZipUtil],
  controllers: [ReportsController],
})
export class ReportsModule {}
