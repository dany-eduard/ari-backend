import { Module } from '@nestjs/common';
import { CongregationService } from './congregation.service';
import { CongregationController } from './congregation.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [CongregationService, PrismaService],
  controllers: [CongregationController],
})
export class CongregationModule {}
