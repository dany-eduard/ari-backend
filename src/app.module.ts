import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { CongregationModule } from './modules/congregation/congregation.module';
import { TeamModule } from './modules/team/team.module';
import { PersonModule } from './modules/person/person.module';
import { PublisherReportModule } from './modules/publisher-report/publisher-report.module';
import { ReportsModule } from './modules/reports/reports.module';
import { LogActionsModule } from './modules/log-actions/log-actions.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LogActionsInterceptor } from './modules/log-actions/log-actions.interceptor';
import { RolesModule } from './modules/roles/roles.module';
import { PermissionsModule } from './modules/permissions/permissions.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CongregationModule,
    TeamModule,
    PersonModule,
    PublisherReportModule,
    ReportsModule,
    LogActionsModule,
    RolesModule,
    PermissionsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LogActionsInterceptor,
    },
  ],
})
export class AppModule {}
