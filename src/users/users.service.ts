import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { user } from 'src/schemas/user.schema';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(user.name) private userModel: Model<user>) {}
  async createUser(createUserDto: CreateUserDto): Promise<user> {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async getsUsers() {
    return await this.userModel.find();
  }

  async getUserById(id: string){
    return await this.userModel.findById(id);
  }

  async getUserByEmail(email: string){
    return await this.userModel.find({ email: email });
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto){
    return await this.userModel.findByIdAndUpdate(id, updateUserDto, {new: true});
  }

  async deleteUser(id: string) {
    return await this.userModel.findByIdAndDelete(id);
  }
}
