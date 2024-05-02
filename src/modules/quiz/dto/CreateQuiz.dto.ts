import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateQuizDto {
  @IsString()
  @IsNotEmpty({ message: 'The quiz should have a title' })
  title: string;
  @IsString()
  @IsNotEmpty()
  @Length(3)
  description: string;
  @IsBoolean()
  @IsOptional()
  isActive: boolean;
}
