import { Provider } from '@nestjs/common';
import { POST_REPOSITORY } from '@config/constants';
import { MikroORM } from '@mikro-orm/core';
import { ThemeEntity } from '@persistence/app/theme/theme.entity';

export const ThemeRepoProvider: Provider = {
  provide: POST_REPOSITORY,
  useFactory: (orm: MikroORM) => {
    return orm.em.getRepository(ThemeEntity);
  },
  inject: [MikroORM],
};
