import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CardDocument = Card & Document;

@Schema()
export class Card {
  @Prop({ required: true })
  cardNumber: string;

  @Prop({ required: true })
  nameOnCard: string;

  @Prop({ required: true })
  cvv: string;

  @Prop({ required: true })
  expiryDate: Date;

  @Prop({ required: true })
  createdAt: Date;
}

export const CardSchema = SchemaFactory.createForClass(Card);
