import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class task {
  @Prop({required: true})
  title: string;

  @Prop({required: false})
  description: string;

  @Prop({required: true})
  email: string;

  @Prop({required: true})
  status: string;
}

export const TaskSchema = SchemaFactory.createForClass(task);
