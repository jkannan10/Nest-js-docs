import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.modal';
import { EmployeeDto } from './EmployeeDto';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  getAllEmployees() {
    return this.employeeRepository.find();
  }
  getEmployeeByID(id: number) {
    return this.employeeRepository.findOneBy({ id });
  }
  async createEmployee(employeeDto: EmployeeDto) {
    const newEmployee = await this.employeeRepository.create(employeeDto);
    return this.employeeRepository.save(newEmployee);
  }
  async updateEmployee(id: number, employeeDto: EmployeeDto) {
    await this.employeeRepository.update(id, employeeDto);
    return this.getEmployeeByID(id);
  }
  async deleteEmployee(id: number) {
    const employee = await this.employeeRepository.delete(id);
    return employee.affected !== 0;
  }
}
