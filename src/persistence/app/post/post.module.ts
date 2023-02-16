import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { PostEntity } from '@persistence/app/post/post.entity';
import { PostRepoProvider } from '@persistence/app/post/post.provider';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [PostEntity] })],
  providers: [PostRepoProvider],
  exports: [PostRepoProvider, MikroOrmModule],
})
export class PostModule {}
