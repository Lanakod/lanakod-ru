import { Provider } from '@nestjs/common';
import { POST_REPOSITORY } from '@config/constants';
import { MikroORM } from '@mikro-orm/core';
import { PostEntity } from '@persistence/app/post/post.entity';

export const PostRepoProvider: Provider = {
  provide: POST_REPOSITORY,
  useFactory: (orm: MikroORM) => {
    return orm.em.getRepository(PostEntity);
  },
  inject: [MikroORM],
};
