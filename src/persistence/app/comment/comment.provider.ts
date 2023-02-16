import { Provider } from '@nestjs/common';
import { POST_REPOSITORY } from '@config/constants';
import { MikroORM } from '@mikro-orm/core';
import { CommentEntity } from '@persistence/app/comment/comment.entity';

export const CommentRepoProvider: Provider = {
  provide: POST_REPOSITORY,
  useFactory: (orm: MikroORM) => {
    return orm.em.getRepository(CommentEntity);
  },
  inject: [MikroORM],
};
