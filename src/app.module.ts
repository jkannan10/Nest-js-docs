import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { todo } from 'node:test';
import { Todo } from './todo/todo.entity';
import { TodoModule } from './todo/todo.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Employee } from './employee/employeeBase/employee.modal';
import { Settings } from './employee/employeeSettings/Settings.modal';
import { EmployeeModule } from './employee/employeeBase/employee.module';
import { SettingsModule } from './employee/employeeSettings/Settings.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT) || 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Todo, Employee, Settings], // Names of table in the DB
      synchronize: true,
    }),
    TodoModule,
    EmployeeModule,
    SettingsModule,
  ],
  providers: [],
})
export class AppModule {}
