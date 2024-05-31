import { Field, InputType, Int } from '@nestjs/graphql';
import { SettingsDto } from '../employeeSettings/Seetings.dto';

@InputType()
export class EmployeeDto {
  @Field({ nullable: true })
  firstName?: string;
  @Field({ nullable: true })
  lastName?: string;
  @Field((type) => Int, { nullable: true })
  salary?: number;
  @Field({ nullable: true })
  settings?: SettingsDto;
}
