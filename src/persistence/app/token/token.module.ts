import { Module } from '@nestjs/common';
import { TokenEntity } from '@persistence/app/token/token.entity';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { TokenRepoProvider } from '@persistence/app/token/token.provider';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [TokenEntity] })],
  providers: [TokenRepoProvider],
  exports: [TokenRepoProvider, MikroOrmModule],
})
export class TokenModule {}
