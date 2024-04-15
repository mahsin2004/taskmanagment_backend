import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class user {
  @Prop({required: false})
  username: string;

  @Prop({required: false})
  avatarUrl: string;

  @Prop({unique: true, required: true})
  email: string;

  @Prop({required: true})
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(user);
