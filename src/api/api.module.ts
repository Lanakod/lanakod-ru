import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { DomainModule } from '@domain/domain.module';
import { AuthModule } from '@auth/auth.module';
import { UserController } from './app/users/user.controller';

@Module({
  imports: [AuthModule, DomainModule],
  controllers: [AuthController, UserController],
})
export class ApiModule {}
