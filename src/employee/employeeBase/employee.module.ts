import { Module } from '@nestjs/common';
import { EmployeeResolver } from './employee.resolver';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.modal';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Employee])],
  controllers: [],
  providers: [EmployeeService, EmployeeResolver],
})
export class EmployeeModule {}
