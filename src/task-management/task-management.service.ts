import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/createTask.dto';
import { UpdateTaskDto } from './dto/updateTask.dto';
import { task } from 'src/schemas/task-management.schema';


@Injectable()
export class TaskManagementService {
    constructor(@InjectModel(task.name) private taskModel: Model<task>) {}
  async createUser(createTaskDto: CreateTaskDto): Promise<task> {
    const createdTask = new this.taskModel(createTaskDto);
    return await createdTask.save();
  }

  async getsTasks() {
    return await this.taskModel.find();
  }

  async getTaskById(id: string){
    return await this.taskModel.findById(id);
  }

  async getTasksByEmail(email: string){
    return await this.taskModel.find({ email: email });
  }

  async updateTask(id: string, updateTaskDto: UpdateTaskDto){
    return await this.taskModel.findByIdAndUpdate(id, updateTaskDto, {new: true});
  }

  async deleteTask(id: string) {
    return await this.taskModel.findByIdAndDelete(id);
  }
}
