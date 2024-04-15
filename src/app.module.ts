import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { TaskManagementModule } from './task-management/task-management.module';

@Module({
  imports: [
    UsersModule,
    TaskManagementModule,
    MongooseModule.forRoot('mongodb+srv://taskmanagement1:1jBOhYuiDezCQBae@cluster0.mowydsq.mongodb.net/taskManagementDB?retryWrites=true&w=majority&appName=Cluster0'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
