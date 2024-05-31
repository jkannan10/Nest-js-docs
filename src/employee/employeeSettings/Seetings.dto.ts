import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class SettingsDto {
  @Field((type) => Int, { nullable: true })
  employeeId: number;
  @Field({ defaultValue: false })
  receiveNotification: boolean;
  @Field({ defaultValue: false })
  receiveEmails: boolean;
}
