import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PersonService } from './person.service';
import { PersonDto } from './dto/person.dto';
import { LogAction } from '../log-actions/decorators/log-action.decorator';
import { Action } from '@prisma/client';
import { RolesGuard } from '../auth/guards/roles.guard';
import { PermissionsGuard } from '../auth/guards/permissions.guard';
import { Permissions } from '../auth/decorators/permissions.decorator';

@UseGuards(AuthGuard('jwt'), RolesGuard, PermissionsGuard)
@Controller()
export class PersonController {
  constructor(private service: PersonService) {}

  @Post('people')
  @Permissions('PERSON_CREATE')
  @LogAction({ action: Action.CREATE, entity: 'Person' })
  create(@Body() dto: PersonDto) {
    return this.service.create(dto);
  }

  @Get('congregations/:congregation_id/people')
  @Permissions('PERSON_READ')
  findAllByCongregation(
    @Param('congregation_id') congregation_id: string,
    @Query() query: { team_id?: number; is_regular_pioneer?: boolean },
  ) {
    return this.service.findAllByCongregation(+congregation_id, query);
  }

  @Put('congregations/:congregation_id/people/update-status')
  @Permissions('PERSON_UPDATE')
  syncCongregationPublishersStatus(@Param('congregation_id') congregation_id: string) {
    return this.service.syncCongregationPublishersStatus(+congregation_id);
  }

  @Get('people/:id')
  @Permissions('PERSON_READ')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Put('people/:id')
  @Permissions('PERSON_UPDATE')
  @LogAction({ action: Action.UPDATE, entity: 'Person' })
  update(@Param('id') id: string, @Body() dto: PersonDto) {
    return this.service.update(+id, dto);
  }

  @Delete('people/:id')
  @Permissions('PERSON_DELETE')
  @LogAction({ action: Action.DELETE, entity: 'Person' })
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
