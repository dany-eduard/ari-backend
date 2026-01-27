import { IsString, IsNotEmpty, IsOptional, IsArray, IsNumber } from 'class-validator';

export class RoleDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsArray()
  @IsOptional()
  @IsNumber({}, { each: true })
  permissionIds?: number[];
}
