import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { create } from 'domain';
import { Repository } from 'typeorm';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './entities/message.entity';
import { UsersService } from 'src/users/users.service';
import { ChannelsService } from 'src/channels/channels.service';
// import { RoomsService } from 'src/rooms/rooms.service';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
    // private readonly roomsService: RoomsService,
    private readonly channelsService: ChannelsService,
  ) {}

  async create(createMessageDto: Partial<CreateMessageDto>) {
    const message = new Message();
    message.message = createMessageDto.msg;
    message.channel = await this.channelsService.findOne(+createMessageDto.channel);
    message.sender = await this.usersService.getUserByName(createMessageDto.from);
    return this.messageRepository.save(message);
  }

  async getUserData(username: string) {
    const messages = await this.messageRepository.find();
    console.log(messages);
    let data: any = {};
    messages.forEach((msg: Message) => {
      if (data[msg.channel.name] === undefined) {
        data[msg.channel.name] = [];
      }

      if (username !== null && msg.message !== null) {
        data[msg.channel.name].push({
          from: msg.sender.name,
          msg: msg.message,
          date: msg.created_at
        })
      }
    });
    return data;
  }

  findAll() {
    return this.messageRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
