import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PersonService } from './person.service';
import { PersonDto } from './dto/person.dto';

@UseGuards(AuthGuard('jwt'))
@Controller()
export class PersonController {
  constructor(private service: PersonService) {}

  @Post('people')
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

  @Get('people/:id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Put('people/:id')
  update(@Param('id') id: string, @Body() dto: PersonDto) {
    return this.service.update(+id, dto);
  }

  @Delete('people/:id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
