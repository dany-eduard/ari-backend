import { Module } from '@nestjs/common';
import { LogActionsService } from './log-actions.service';
import { LogActionsInterceptor } from './log-actions.interceptor';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [LogActionsService, LogActionsInterceptor],
  exports: [LogActionsService],
})
export class LogActionsModule {}
