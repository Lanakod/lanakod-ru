import { Provider } from '@nestjs/common';
import { TOKEN_REPOSITORY } from '@config/constants';
import { DataSource } from 'typeorm';
import { TokenRepositoryImpl } from '@persistence/app/token/token.repository';

export const TokenRepoProvider: Provider = {
  provide: TOKEN_REPOSITORY,
  useFactory: (dataSource: DataSource) => {
    return dataSource.getRepository(TokenRepositoryImpl);
  },
  inject: [DataSource],
};
