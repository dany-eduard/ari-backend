import { IsString } from 'class-validator';

export class CongregationDto {
  @IsString()
  name: string;

  @IsString()
  code: string;
}
