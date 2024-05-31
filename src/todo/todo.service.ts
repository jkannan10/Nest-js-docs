import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { TodoDto } from './todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
  ) {}

  async create(dto: TodoDto): Promise<Todo> {
    const todo = this.todoRepository.create(dto);
    return await this.todoRepository.save(todo);
  }

  async getAll(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }

  // async getOne(id: number): Promise<Todo> {
  //   return await this.todoRepository.findOne({ where: { id: id } });
  // }

  async update(id: number, dto: TodoDto): Promise<Todo> {
    await this.todoRepository.update(id, dto);
    return null;
  }

  async deleteOne(id: number): Promise<DeleteResult> {
    return this.todoRepository.delete(id);
  }
}
