import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post } from '@nestjs/common';
import mongoose from 'mongoose';
import { CreateTaskDto } from './dto/createTask.dto';
import { TaskManagementService } from './task-management.service';
import { UpdateTaskDto } from './dto/updateTask.dto';


@Controller('task-management')
export class TaskManagementController {
    constructor(private taskManagementService: TaskManagementService) {}

    @Post()
    async createUser(@Body() createTaskDto: CreateTaskDto) {
        console.log(createTaskDto);
        return await this.taskManagementService.createUser(createTaskDto);
    }

    @Get()
    async getsTasks(){
        return await this.taskManagementService.getsTasks();
    }

    @Get(":id")
    async getTaskById(@Param("id")  id: string){
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if(!isValid) throw new HttpException("Id Invalid", 404);
        const findTask = await this.taskManagementService.getTaskById(id);
        if(!findTask) throw new HttpException("Task not found", 404);
        return findTask;
    }

    @Get("email/:email")
    async getTasksByEmail(@Param("email")  email: string){
        const findTask = await this.taskManagementService.getTasksByEmail(email);
        if(!findTask) throw new HttpException("Tasks not found", 404);
        return findTask;
    }

    @Patch(":id")
    async updateTask(@Param("id") id: string, @Body() updateTaskDto: UpdateTaskDto){
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if(!isValid) throw new HttpException("Id Invalid", 404);
        const taskUpdate = await this.taskManagementService.updateTask(id, updateTaskDto);
        if(!taskUpdate) throw new HttpException("Task not found", 404);
        return taskUpdate;
    }

    @Delete(":id")
    async deleteTask(@Param("id") id: string){
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if(!isValid) throw new HttpException("Id Invalid", 404);
        const deleteTask = await this.taskManagementService.deleteTask(id);
        if(!deleteTask) throw new HttpException("Task not found", 404);
        return deleteTask;
    }
}
