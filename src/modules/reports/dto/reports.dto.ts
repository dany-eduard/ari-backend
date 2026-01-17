import { Type } from 'class-transformer';
import { IsNumber, ValidateNested } from 'class-validator';

export class CongregationHomeResponseDto {
  @IsNumber()
  total_teams: number;

  @IsNumber()
  total_people: number;

  @IsNumber()
  total_active_people: number;

  @IsNumber()
  expected_reports: number;

  @IsNumber()
  registered_reports: number;

  @IsNumber()
  missing_reports: number;

  @ValidateNested()
  @Type(() => SummaryDto)
  summary: SummaryDto;
}

class SummaryDto {
  @ValidateNested()
  @Type(() => PublisherSummaryDto)
  publishers: PublisherSummaryDto;

  @ValidateNested()
  @Type(() => RegularPioneerSummaryDto)
  regular_pioneers: RegularPioneerSummaryDto;

  @ValidateNested()
  @Type(() => AuxiliaryPioneerSummaryDto)
  auxiliary_pioneers: AuxiliaryPioneerSummaryDto;
}

class PublisherSummaryDto {
  @IsNumber()
  reports: number;

  @IsNumber()
  bible_courses: number;
}

class RegularPioneerSummaryDto {
  @IsNumber()
  reports: number;

  @IsNumber()
  bible_courses: number;

  @IsNumber()
  hours: number;
}

class AuxiliaryPioneerSummaryDto {
  @IsNumber()
  reports: number;

  @IsNumber()
  bible_courses: number;

  @IsNumber()
  hours: number;
}
