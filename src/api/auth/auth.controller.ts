import { Body, Controller, HttpCode, Inject, Post, Res } from '@nestjs/common';
import { AUTH_SERVICE } from '@config/constants';
import { Response } from 'express';
import { AuthService } from '@auth/interface/service.interface';
import { RegisterDto } from '@api/auth/dto/register.dto';
import { LoginDto } from '@api/auth/dto/login.dto';
import Tokens from '@domain/app/token/interface/tokens.interface';

const AuthService = () => Inject(AUTH_SERVICE);

@Controller('auth')
export class AuthController {
  constructor(@AuthService() private authService: AuthService) {}

  @Post('register')
  @HttpCode(201)
  async register(@Body() dto: RegisterDto, @Res() response: Response) {
    const { data, ...result } = await this.authService.register(dto);
    const { accessToken, refreshToken } = data.tokens as Tokens;

    return response
      .cookie('access_token', accessToken)
      .cookie('refresh_cookie', refreshToken)
      .json({ ...result, data: data.user });
  }

  @HttpCode(200)
  @Post('login')
  async login(@Body() dto: LoginDto, @Res() response: Response) {
    const { data, ...result } = await this.authService.login(dto);
    const { accessToken, refreshToken } = data.tokens as Tokens;

    return response
      .cookie('access_token', accessToken)
      .cookie('refresh_cookie', refreshToken)
      .json({ ...result, data: data.user });
  }
}
