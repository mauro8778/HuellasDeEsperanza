import { configDotenv } from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';

configDotenv({ path: '.env' });

const dbConfig: DataSourceOptions = {
  type: 'postgres',
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  logging: false,
  synchronize: false,
  dropSchema: false,
};

export const databaseConfig = TypeOrmModule.forRoot({
  ...dbConfig,
});

export const connectionSource = new DataSource(dbConfig);