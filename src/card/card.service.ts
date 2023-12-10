import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Card, CardDocument } from './schemas/card.schema';
import { Model } from 'mongoose';
import { CreateCardDto } from './dto/create-card.dto';

@Injectable()
export class CardService {
  constructor(
    @InjectModel(Card.name) private readonly model: Model<CardDocument>,
  ) {}

  async findAll(): Promise<Card[]> {
    return await this.model.find().exec();
  }

  async create(createTodoDto: CreateCardDto): Promise<Card> {
    return await new this.model({
      ...createTodoDto,
      createdAt: new Date(),
    }).save();
  }
}
