import { Module } from '@nestjs/common';
import UserEntity from '@persistence/app/user/user.entity';
// import { UserRepoProvider } from '@persistence/app/user/user.provider';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { UserRepoProvider } from '@persistence/app/user/user.provider';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [UserEntity] })],
  providers: [UserRepoProvider],
  exports: [UserRepoProvider, MikroOrmModule],
})
export class UserModule {}
