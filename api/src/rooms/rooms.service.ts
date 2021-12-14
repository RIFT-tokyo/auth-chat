import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './entities/room.entity';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(Room)
    private readonly roomRepository: Repository<Room>,
    private readonly usersService: UsersService,
  ) {}

  async create(createRoomDto: CreateRoomDto) {
    const room = new Room()
    room.name = createRoomDto.name
    room.owner = await this.usersService.getUser(createRoomDto.owner_id)
    return this.roomRepository.save(room);
  }

  async findAll() {
    return this.roomRepository.find({relations: ['owner']});
  }

  async findOne(id: number) {
    return this.roomRepository.findOne(id);
  }

  async update(id: number, updateRoomDto: UpdateRoomDto) {
    await this.roomRepository.update(id, updateRoomDto);
    return this.roomRepository.findOne(id);
  }

  async remove(id: number) {
    return this.roomRepository.delete(id);
  }
}
