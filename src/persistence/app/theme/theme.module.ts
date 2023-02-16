import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ThemeRepoProvider } from '@persistence/app/theme/theme.provider';
import { ThemeEntity } from '@persistence/app/theme/theme.entity';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [ThemeEntity] })],
  providers: [ThemeRepoProvider],
  exports: [ThemeRepoProvider, MikroOrmModule],
})
export class ThemeModule {}
