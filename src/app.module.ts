import {
  MiddlewareConsumer,
  Module,
  NestModule,
  OnModuleInit,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiModule } from '@api/api.module';
import { AuthModule } from '@auth/auth.module';
import { DatabaseModule } from '@database/database.module';
import { DomainModule } from '@domain/domain.module';
import { PersistenceModule } from '@persistence/persistence.module';
import { MikroORM } from '@mikro-orm/core';
import { MikroOrmMiddleware } from '@mikro-orm/nestjs';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
      isGlobal: true,
      cache: true,
    }),
    ApiModule,
    AuthModule,
    DatabaseModule,
    DomainModule,
    PersistenceModule,
  ],
})
export class AppModule implements NestModule, OnModuleInit {
  constructor(private readonly orm: MikroORM) {}

  async onModuleInit(): Promise<void> {
    await this.orm.getMigrator().up();
  }

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MikroOrmMiddleware).forRoutes('*');
  }
}
