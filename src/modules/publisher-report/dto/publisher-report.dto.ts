import { IsString, IsNumber, IsBoolean } from 'class-validator';

export class PublisherReportDto {
  @IsNumber()
  person_id: number;

  @IsNumber()
  service_year?: number;

  @IsNumber()
  year: number;

  @IsNumber()
  month: number;

  @IsBoolean()
  participated: boolean;

  @IsNumber()
  bible_courses: number;

  @IsBoolean()
  is_auxiliary_pioneer: boolean;

  @IsNumber()
  hours: number;

  @IsString()
  notes: string;
}
