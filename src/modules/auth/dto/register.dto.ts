import { IsArray, IsEmail, IsOptional, IsString, IsStrongPassword } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  password: string;

  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  congregation_id?: number;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  roles?: string[];
}
