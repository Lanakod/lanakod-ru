import { Provider } from '@nestjs/common';
import { USER_REPOSITORY } from '@config/constants';
import { MikroORM } from '@mikro-orm/core';
import UserEntity from '@persistence/app/user/user.entity';

export const UserRepoProvider: Provider = {
  provide: USER_REPOSITORY,
  useFactory: (orm: MikroORM) => {
    return orm.em.getRepository(UserEntity);
  },
  inject: [MikroORM],
};
