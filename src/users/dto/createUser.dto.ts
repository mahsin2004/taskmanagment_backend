import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto{
 
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    avatarUrl: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}