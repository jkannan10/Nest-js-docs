import { Module } from '@nestjs/common';
import { SettingsResolver } from './settings.resolver';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Settings } from './Settings.modal';
import { SettingsService } from './Settings.service';
import { EmployeeService } from '../employeeBase/employee.service';
import { Employee } from '../employeeBase/employee.modal';

@Module({
  imports: [TypeOrmModule.forFeature([Settings, Employee])],
  controllers: [],
  providers: [SettingsResolver, SettingsService, EmployeeService],
})
export class SettingsModule {}
