import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class PermissionDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;
}
