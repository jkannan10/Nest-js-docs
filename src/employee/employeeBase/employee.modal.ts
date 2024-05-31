import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Settings } from '../employeeSettings/Settings.modal';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'employee' })
@ObjectType()
export class Employee {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;
  @Column()
  @Field()
  firstName: string;
  @Column({ nullable: true })
  @Field({ nullable: true })
  lastName?: string;
  @Column()
  @Field((type) => Int)
  salary: number;
  @OneToOne(() => Settings)
  @JoinColumn()
  @Field({ nullable: true })
  settings?: Settings;
}
