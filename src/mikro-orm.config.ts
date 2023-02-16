import { LoadStrategy } from '@mikro-orm/core';
import { defineConfig } from '@mikro-orm/postgresql';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { Migrator } from '@mikro-orm/migrations';

export default defineConfig({
  host: '10.10.22.7',
  port: 5001,
  user: 'lanakod-blog',
  password: 'vbhxenrf2002',
  dbName: 'lanakod-blog',
  entities: ['./dist/persistence/**/*.entity.js'],
  entitiesTs: ['./src/persistence/**/*.entity.ts'],
  debug: true,
  loadStrategy: LoadStrategy.JOINED,
  highlighter: new SqlHighlighter(),
  metadataProvider: TsMorphMetadataProvider,
  // @ts-expect-error nestjs adapter option
  registerRequestContext: false,
  extensions: [Migrator],
  type: 'postgresql',
  migrations: {
    path: 'dist/database/migrations',
    pathTs: 'src/database/migrations',
  },
});
