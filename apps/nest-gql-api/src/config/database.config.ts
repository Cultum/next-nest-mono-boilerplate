import { registerAs } from '@nestjs/config';

import { DataSourceOptions } from 'typeorm/data-source/DataSourceOptions';
import * as process from 'process';

export const databaseConfigFactory = (): DataSourceOptions => {
  const host = process.env.DEVELOPMENT_DATABASE_HOST;

  const isLocalhost = host === 'localhost';

  return {
    type: 'postgres',
    host: process.env.DEVELOPMENT_DATABASE_HOST,
    port: parseInt(process.env.DEVELOPMENT_DATABASE_PORT, 10),
    username: process.env.DEVELOPMENT_DATABASE_USERNAME,
    password: process.env.DEVELOPMENT_DATABASE_PASSWORD,
    database: process.env.DEVELOPMENT_DATABASE_NAME,

    logging: 'all',

    entities: ['dist/**/*.entity{.ts,.js}'],
    subscribers: ['dist/**/*.subscriber{.ts,.js}'],
    migrations: ['dist/database/migrations/*{.ts,.js}'],

    ssl: !isLocalhost,
  };
};

export const databaseConfig = registerAs<DataSourceOptions>(
  'database',
  databaseConfigFactory,
);
