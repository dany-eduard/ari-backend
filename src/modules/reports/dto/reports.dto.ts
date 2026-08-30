import { Type } from 'class-transformer';
import { IsNumber, IsString, ValidateNested } from 'class-validator';

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

export class RegularPioneerActivityItemDto {
  @IsNumber()
  id: number;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsNumber()
  reportedMonths: number;

  @IsNumber()
  monthlyAverageHours: number;

  @IsNumber()
  currentTotalHours: number;
}

export class RegularPioneerRankingItemDto {
  @IsNumber()
  position: number;

  @IsNumber()
  id: number;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsNumber()
  currentTotalHours: number;
}

export class RegularPioneersActivityResponseDto {
  @ValidateNested({ each: true })
  @Type(() => RegularPioneerActivityItemDto)
  pioneers: RegularPioneerActivityItemDto[];

  @ValidateNested({ each: true })
  @Type(() => RegularPioneerRankingItemDto)
  ranking: RegularPioneerRankingItemDto[];
}

