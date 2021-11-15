import { Module } from '@nestjs/common';
import { ViewController } from './view/view.controller'
import { ViewService } from './view/view.service'
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsController } from './server/items/items.controller'
import { ItemsModule } from './server/items/items.module'

@Module({
  imports: [ItemsModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017/test?directConnection=true&serverSelectionTimeoutMS=2000')],
  controllers: [ItemsController, ViewController],
  providers: [ViewService],
})
export class AppModule {}
