import { Module } from '@nestjs/common';
import { TokenModule } from './app/token/token.module';
import { UserModule } from './app/user/user.module';
import { PostModule } from '@persistence/app/post/post.module';
import { CommentModule } from '@persistence/app/comment/comment.module';
import { ThemeModule } from '@persistence/app/theme/theme.module';

@Module({
  imports: [TokenModule, PostModule, UserModule, CommentModule, ThemeModule],
  exports: [TokenModule, PostModule, UserModule],
})
export class PersistenceModule {}
