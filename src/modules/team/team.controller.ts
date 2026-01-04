import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TeamService } from './team.service';
import { TeamDto } from './dto/team.dto';

@UseGuards(AuthGuard('jwt'))
@Controller('teams')
export class TeamController {
  constructor(private service: TeamService) {}

  @Post()
  create(@Body() dto: TeamDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll(@Query('congregation_id') congregation_id: string | undefined) {
    return this.service.findAll(congregation_id ? +congregation_id : undefined);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: TeamDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
