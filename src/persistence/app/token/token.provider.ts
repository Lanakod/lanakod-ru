import { Provider } from '@nestjs/common';
import { TOKEN_REPOSITORY } from '@config/constants';
import { MikroORM } from '@mikro-orm/core';
import { TokenEntity } from '@persistence/app/token/token.entity';

export const TokenRepoProvider: Provider = {
  provide: TOKEN_REPOSITORY,
  useFactory: (orm: MikroORM) => {
    return orm.em.getRepository(TokenEntity);
  },
  inject: [MikroORM],
};
