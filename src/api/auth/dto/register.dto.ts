import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

@Exclude()
export class RegisterDto {
  @IsString()
  @Expose()
  given_name: string;

  @IsString()
  @Expose()
  family_name: string;

  @IsString()
  @Expose()
  patronymic: string;

  @IsString()
  @IsNotEmpty()
  @Expose()
  username: string;

  @IsString()
  @IsNotEmpty()
  @Expose()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Expose()
  password: string;
}
