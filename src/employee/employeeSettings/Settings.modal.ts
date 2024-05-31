import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'settings' })
@ObjectType()
export class Settings {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  employeeId: number;
  @Column({ default: false })
  @Field({ defaultValue: false })
  receiveNotification: boolean;
  @Column({ default: false })
  @Field({ defaultValue: false })
  receiveEmails: boolean;
}
