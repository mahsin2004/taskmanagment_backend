import { Module } from '@nestjs/common';
import { TaskManagementController } from './task-management.controller';
import { TaskManagementService } from './task-management.service';
import { MongooseModule } from '@nestjs/mongoose';
import { task, TaskSchema } from 'src/schemas/task-management.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: task.name, schema: TaskSchema }]),
  ],
  controllers: [TaskManagementController],
  providers: [TaskManagementService]
})
export class TaskManagementModule {}
