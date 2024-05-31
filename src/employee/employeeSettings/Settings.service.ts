import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Settings } from './Settings.modal';
import { Repository } from 'typeorm';
import { SettingsDto } from './Seetings.dto';
import { Employee } from '../employeeBase/employee.modal';
import { EmployeeService } from '../employeeBase/employee.service';

@Injectable()
export class SettingsService {
  constructor(
    @InjectRepository(Settings)
    private readonly settingsRepository: Repository<Settings>,
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,

    private readonly employeeService: EmployeeService,
  ) {}

  async createSettings(settingsDto: SettingsDto) {
    const employee = await this.employeeService.getEmployeeByID(
      settingsDto.employeeId,
    );
    if (!employee) {
      throw new Error('Employee Not Found');
    }
    const newSettings = await this.settingsRepository.create(settingsDto);
    employee.settings = newSettings;
    await this.employeeRepository.save(employee);
    await this.settingsRepository.save(newSettings);
    return newSettings;
  }
  async updateSettings(id: number, settingsDto: SettingsDto) {
    await this.settingsRepository.update(id, settingsDto);
    return this.getSettingsByID(id);
  }
  async deleteSettings(id: number) {
    const result = await this.settingsRepository.delete({
      employeeId: id,
    });
    return result.affected !== 0;
  }
  async getSettings() {
    return await this.settingsRepository.find();
  }
  async getSettingsByID(id: number) {
    return await this.settingsRepository.findOneBy({ employeeId: id });
  }
}
