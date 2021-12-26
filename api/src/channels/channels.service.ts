import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateChannelDto } from './dto/create-channel.dto';
import { UpdateChannelDto } from './dto/update-channel.dto';
import { Channel } from './entities/channel.entity';

@Injectable()
export class ChannelsService {
  constructor(
    @InjectRepository(Channel)
    private readonly channelRepogitory: Repository<Channel>,
  ) {}

  async create(createChannelDto: CreateChannelDto) {
    return this.channelRepogitory.create(createChannelDto);
  }

  findAll() {
    return this.channelRepogitory.find();
  }

  async findOne(id: number) {
    return this.channelRepogitory.findOne({ id });
  }

  async update(id: number, updateChannelDto: UpdateChannelDto) {
    const updateChannel = await this.channelRepogitory.findOne({ id });
    if (!updateChannel) {
      throw new Error('Channel not found');
    }
    return this.channelRepogitory.update(id, updateChannelDto);
  }

  async remove(id: number) {
    const channel = await this.channelRepogitory.findOne({ id });
    if (!channel) {
      throw new Error('Channel not found');
    }
    return this.channelRepogitory.remove(channel);
  }
}
