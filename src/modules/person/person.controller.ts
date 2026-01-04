import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PersonService } from './person.service';
import { PersonDto } from './dto/person.dto';

@UseGuards(AuthGuard('jwt'))
@Controller()
export class PersonController {
  constructor(private service: PersonService) {}

  @Post('persons')
  create(@Body() dto: PersonDto) {
    return this.service.create(dto);
  }

  @Get('congregations/:congregation_id/persons')
  findAllByCongregation(
    @Param('congregation_id') congregation_id: string,
    @Query() query: { team_id?: number; is_regular_pioneer?: boolean },
  ) {
    return this.service.findAllByCongregation(+congregation_id, query);
  }

  @Get('persons/:id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Put('persons/:id')
  update(@Param('id') id: string, @Body() dto: PersonDto) {
    return this.service.update(+id, dto);
  }

  @Delete('persons/:id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
