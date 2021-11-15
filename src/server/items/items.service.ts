import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {

  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) { }

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }

  async findOne(age: number): Promise<Item> {
    return await this.itemModel.findOne({ age: age });
  }
  async create(item: Item): Promise<Item> {
    return await this.itemModel.create(item);
  }

  async delete(id: string): Promise<Item> {
    return this.itemModel.findByIdAndRemove(id);
  }

  async update(name: string, item: Item): Promise<Item> {
    return await this.itemModel.findOneAndUpdate({ name }, item, { new: true })
  }

}
