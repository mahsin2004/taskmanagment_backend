import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class user {
  @Prop({required: true})
  username: string;

  @Prop({required: true})
  avatarUrl: string;

  @Prop({unique: true, required: true})
  email: string;

  @Prop({required: true})
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(user);
