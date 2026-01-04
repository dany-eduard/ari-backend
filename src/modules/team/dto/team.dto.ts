import { IsString, IsNumber } from 'class-validator';

export class TeamDto {
  @IsString()
  name: string;

  @IsNumber()
  congregation_id: number;
}
