import { IsString, IsNumber, IsDate, IsBoolean, IsEnum } from 'class-validator';

export class PersonDto {
  @IsNumber()
  congregation_id: number;

  @IsNumber()
  team_id: number;

  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsDate()
  birth_date: Date;

  @IsDate()
  baptism_date: Date;

  @IsEnum(['MALE', 'FEMALE'])
  sex: 'MALE' | 'FEMALE';

  @IsString()
  number_phone?: string;

  @IsBoolean()
  is_active?: boolean;

  @IsBoolean()
  is_elder: boolean;

  @IsBoolean()
  is_ministerial_servant: boolean;

  @IsBoolean()
  is_regular_pioneer: boolean;

  @IsBoolean()
  is_special_pioneer: boolean;

  @IsBoolean()
  is_field_missionary: boolean;

  @IsBoolean()
  is_other_sheep: boolean;

  @IsBoolean()
  is_anointed: boolean;
}
