import { Module } from '@nestjs/common';
import { LogActionsService } from './log-actions.service';
import { LogActionsInterceptor } from './log-actions.interceptor';
import { PrismaModule } from '../../prisma/prisma.module';
import { LogActionsController } from './log-actions.controller';

@Module({
  imports: [PrismaModule],
  providers: [LogActionsService, LogActionsInterceptor],
  exports: [LogActionsService],
  controllers: [LogActionsController],
})
export class LogActionsModule {}
