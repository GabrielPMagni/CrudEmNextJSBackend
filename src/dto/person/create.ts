import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Validate,
} from 'class-validator';
import { isValidCPF, isValidDateString } from '../shared/custom';

export class CreatePersonDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  surname: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsOptional()
  @Validate(isValidDateString)
  birthdate?: Date;

  @IsNotEmpty()
  @IsString()
  maritalStatus: string;

  @IsOptional()
  @IsString()
  birthplace?: string;

  @IsNotEmpty()
  @Validate(isValidCPF)
  cpf: string;

  @IsOptional()
  @IsString()
  rg?: string;

  @IsOptional()
  @IsString()
  occupation?: string;

  @IsOptional()
  @IsString()
  spouseName?: string;

  @IsOptional()
  @Validate(isValidCPF)
  spouseCpf?: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  neighborhood: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  zipCode: string;

  @IsOptional()
  @IsString()
  observation?: string;

  @IsOptional()
  @Validate(isValidDateString)
  purchaseDate?: Date;
}
