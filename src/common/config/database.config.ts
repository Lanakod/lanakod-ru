import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  MikroOrmModuleAsyncOptions,
  MikroOrmModuleOptions,
} from '@mikro-orm/nestjs';

export class PostgresConfig {
  static getOrmConfig(configService: ConfigService): MikroOrmModuleOptions {
    return {
      // autoLoadEntities: true,
      entities: ['./dist/persistence/**/*.entity.js'],
      entitiesTs: ['./src/persistence/**/*.entity.ts'],
      dbName: configService.get('DB_NAME'),
      host: configService.get('DB_HOST'),
      port: Number(configService.get('DB_PORT')),
      user: configService.get('DB_USERNAME'),
      password: configService.get('DB_PASSWORD'),
      type: 'postgresql',
    };
  }
}

export const postgresDbConfigAsync: MikroOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (
    configService: ConfigService,
  ): Promise<MikroOrmModuleOptions> =>
    PostgresConfig.getOrmConfig(configService),
  inject: [ConfigService],
};
