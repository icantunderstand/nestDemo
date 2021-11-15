import { Body, Controller, Delete, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express'
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {

  constructor(private readonly itemsService: ItemsService) { }

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }
  @Get(':age')
  findOne(@Param('age') age: number): Promise<Item> {
    return this.itemsService.findOne(age);
  }

  @Post()
  async create(@Body() createItemDto: CreateItemDto, @Res() res: Response) {
    return this.itemsService.create(createItemDto);
  }
  @Post('update')
  async update(@Body() createItemDto: CreateItemDto, @Res() res: Response) {
    const { name } = createItemDto
    await this.itemsService.update(name,createItemDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Item> {
    return this.itemsService.delete(id);
  }

}
