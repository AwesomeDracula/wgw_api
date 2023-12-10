import { Body, Controller, Get, Post } from '@nestjs/common';
import { CardService } from './card.service';
import { CreateCardDto } from './dto/create-card.dto';

@Controller('cards')
export class CardController {
  constructor(private readonly service: CardService) {}

  @Get()
  async findAll() {
    return await this.service.findAll();
  }

  @Post()
  async create(@Body() createCardDto: CreateCardDto) {
    return await this.service.create(createCardDto);
  }
}
