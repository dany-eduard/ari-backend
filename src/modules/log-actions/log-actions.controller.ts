import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { LogActionsService } from './log-actions.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('log-actions')
export class LogActionsController {
  constructor(private readonly logActionsService: LogActionsService) {}

  @Get()
  findAll(@Query() query: { page?: number; limit?: number }) {
    return this.logActionsService.findAll(query);
  }
}
