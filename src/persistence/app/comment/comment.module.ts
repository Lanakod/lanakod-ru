import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { CommentRepoProvider } from '@persistence/app/comment/comment.provider';
import { CommentEntity } from '@persistence/app/comment/comment.entity';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [CommentEntity] })],
  providers: [CommentRepoProvider],
  exports: [CommentRepoProvider, MikroOrmModule],
})
export class CommentModule {}
