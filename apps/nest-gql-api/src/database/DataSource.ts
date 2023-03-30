import { DataSource } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import { databaseConfigFactory } from '../config/database.config';

ConfigModule.forRoot({
  isGlobal: true,
});

export default new DataSource(databaseConfigFactory());
