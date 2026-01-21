import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PersonService } from './person.service';
import { PersonDto } from './dto/person.dto';
import { LogAction } from '../log-actions/decorators/log-action.decorator';
import { Action } from '@prisma/client';

@UseGuards(AuthGuard('jwt'))
@Controller()
export class PersonController {
  constructor(private service: PersonService) {}

  @Post('people')
  @LogAction({ action: Action.CREATE, entity: 'Person' })
  create(@Body() dto: PersonDto) {
    return this.service.create(dto);
  }

  @Get('congregations/:congregation_id/people')
  findAllByCongregation(
    @Param('congregation_id') congregation_id: string,
    @Query() query: { team_id?: number; is_regular_pioneer?: boolean },
  ) {
    return this.service.findAllByCongregation(+congregation_id, query);
  }

  @Put('congregations/:congregation_id/people/update-status')
  syncCongregationPublishersStatus(@Param('congregation_id') congregation_id: string) {
    return this.service.syncCongregationPublishersStatus(+congregation_id);
  }

  @Get('people/:id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Put('people/:id')
  @LogAction({ action: Action.UPDATE, entity: 'Person' })
  update(@Param('id') id: string, @Body() dto: PersonDto) {
    return this.service.update(+id, dto);
  }

  @Delete('people/:id')
  @LogAction({ action: Action.DELETE, entity: 'Person' })
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
