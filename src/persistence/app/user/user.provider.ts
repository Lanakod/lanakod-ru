import { Provider } from '@nestjs/common';
import { USER_REPOSITORY } from '@config/constants';
import { DataSource } from 'typeorm';
import { UserRepositoryImpl } from '@persistence/app/user/user.repository';

export const UserRepoProvider: Provider = {
  provide: USER_REPOSITORY,
  useFactory: (dataSource: DataSource) => {
    return dataSource.getRepository(UserRepositoryImpl);
  },
  inject: [DataSource],
};
