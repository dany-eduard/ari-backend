import { IsOptional, IsString } from 'class-validator';

export class CongregationDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  code?: string;
}
