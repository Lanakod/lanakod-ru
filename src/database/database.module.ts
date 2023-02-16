import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { postgresDbConfigAsync } from '@config/database.config';

@Module({
  imports: [MikroOrmModule.forRootAsync(postgresDbConfigAsync)],
})
export class DatabaseModule {}
