import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUser.dto';
import mongoose from 'mongoose';
import { UpdateUserDto } from './dto/updateUser.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto) {
        console.log(createUserDto);
        return await this.usersService.createUser(createUserDto);
    }

    @Get()
    async getsUsers(){
        return await this.usersService.getsUsers();
    }

    @Get(":id")
    async getUserById(@Param("id")  id: string){
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if(!isValid) throw new HttpException("user not found", 404);
        const findUser = await this.usersService.getUserById(id);
        if(!findUser) throw new HttpException("user not found", 404);
        return findUser;
    }

    @Get("email/:email")
    async getUserByEmail(@Param("email")  email: string){
        const findUser = await this.usersService.getUserByEmail(email);
        if(!findUser) throw new HttpException("user not found", 404);
        return findUser;
    }

    @Patch(":id")
    async updateUser(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto){
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if(!isValid) throw new HttpException("Id Invalid", 404);
        const userUpdate = await this.usersService.updateUser(id, updateUserDto);
        if(!userUpdate) throw new HttpException("user not found", 404);
        return userUpdate;
    }

    @Delete(":id")
    async deleteUser(@Param("id") id: string){
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if(!isValid) throw new HttpException("Id Invalid", 404);
        const deleteUser = await this.usersService.deleteUser(id);
        if(!deleteUser) throw new HttpException("user not found", 404);
        return deleteUser;
    }
}
