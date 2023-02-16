import { Module } from '@nestjs/common';
// import { ThemeModule } from './app/token/token.module';
import { UserModule } from './app/user/user.module';

@Module({
  imports: [
    // ThemeModule,
    UserModule,
  ],
  exports: [
    // ThemeModule,
    UserModule,
  ],
})
export class DomainModule {}
