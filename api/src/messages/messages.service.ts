import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { create } from 'domain';
import { Repository } from 'typeorm';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './entities/message.entity';
import { UsersService } from 'src/users/users.service';
import { RoomsService } from 'src/rooms/rooms.service';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
    private readonly usersService: UsersService,
    private readonly roomsService: RoomsService,
  ) {}

  async create(createMessageDto: Partial<CreateMessageDto>) {
    const message = new Message();
    message.message = createMessageDto.msg;
    message.room = await this.roomsService.findOne(+createMessageDto.channel);
    message.sender = await this.usersService.getUserByName(createMessageDto.from);
    return this.messageRepository.save(message);
  }

  findAll() {
    return `This action returns all messages`;
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
