import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import UserEntity from '@persistence/app/user/user.entity';
import TokenEntity from '@persistence/app/token/token.entity';

export class PostgresConfig {
  static getOrmConfig(configService: ConfigService): PostgresConnectionOptions {
    return {
      type: 'postgres',
      database: configService.get('DB_NAME'),
      host: configService.get('DB_HOST'),
      port: Number(configService.get('DB_PORT')),
      username: configService.get('DB_USERNAME'),
      password: configService.get('DB_PASSWORD'),
      synchronize: true,
      entities: [process.cwd() + '/dist/persistence/**/*.entity.js'],
      // entities: [UserEntity, TokenEntity],
      migrationsTableName: 'migrations',
      migrations: [process.cwd() + '/src/database/migrations/*{.js,.ts}'],
    };
  }
}

export const postgresDbConfigAsync: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (
    configService: ConfigService,
  ): Promise<TypeOrmModuleOptions> =>
    PostgresConfig.getOrmConfig(configService),
  inject: [ConfigService],
};
