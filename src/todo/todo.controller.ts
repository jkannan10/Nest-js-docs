import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';
import { TodoDto } from './todo.dto';

@Controller()
export class TodoController {
  private readonly todoService;
  constructor(todoService: TodoService) {
    this.todoService = todoService;
  }

  @Post('/post')
  async create(@Body() dto: TodoDto): Promise<Todo> {
    return await this.todoService.create(dto);
  }
  @Get()
  async getAll(): Promise<Todo[]> {
    return await this.todoService.getAll();
  }
  // @Get('/:id')
  // async getOne(@Param('id') id: number): Promise<Todo> {
  //   return await this.todoService.getOne({ where: { id } });
  // }
  @Put()
  async update(@Body() dto: TodoDto, @Query('id') id: number): Promise<Todo> {
    return await this.todoService.update(id, dto);
  }
  @Delete('/:id')
  async deleteOne(@Param('id') id: number) {
    return this.todoService.deleteOne(id);
  }
}
