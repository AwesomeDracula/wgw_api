import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardModule } from './card/card.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import globalConfig from './config/global.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [globalConfig],
      cache: true,
    }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@wgw.eazerce.mongodb.net/?retryWrites=true&w=majority`,
    ),
    CardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
