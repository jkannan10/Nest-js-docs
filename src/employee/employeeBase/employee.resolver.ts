import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Employee } from './employee.modal';
import { EmployeeService } from './employee.service';
import { EmployeeDto } from './EmployeeDto';

export let increment = 5;
@Resolver((of) => Employee)
export class EmployeeResolver {
  constructor(private readonly employeeService: EmployeeService) {}

  @Query((returns) => Employee, { nullable: true })
  getEmployeeByID(@Args('id', { type: () => Int }) id: number) {
    return this.employeeService.getEmployeeByID(id);
  }

  @Query((returns) => [Employee])
  async getAllEmployees() {
    return await this.employeeService.getAllEmployees();
  }

  @Mutation((returns) => Employee)
  createEmployee(@Args('createEmployeeData') employeeDto: EmployeeDto) {
    return this.employeeService.createEmployee(employeeDto);
  }

  @Mutation((returns) => Employee)
  updateEmployee(
    @Args('id', { type: () => Int }) id: number,
    @Args('employeeData') employeeDto: EmployeeDto,
  ) {
    return this.employeeService.updateEmployee(id, employeeDto);
  }

  @Mutation((returns) => Boolean, { nullable: true })
  async deleteEmployee(@Args('id', { type: () => Int }) id: number) {
    return await this.employeeService.deleteEmployee(id);
  }
}
