import { Module } from '@nestjs/common';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Card, CardSchema } from './schemas/card.schema';

@Module({
  providers: [CardService],
  controllers: [CardController],
  imports: [
    MongooseModule.forFeature([{ name: Card.name, schema: CardSchema }]),
  ],
})
export class CardModule {}
