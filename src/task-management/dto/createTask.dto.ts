import { IsNotEmpty, IsString } from "class-validator";

export class CreateTaskDto{
 
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    status: string;
}