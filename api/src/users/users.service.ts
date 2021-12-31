import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { User } from './entities/users.entity';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { MessagesService } from '../messages/messages.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @Inject(forwardRef(() => MessagesService))
    private readonly messagesService: MessagesService,
  ) {}

  async getUser(id: number): Promise<User> {
    return this.userRepository.findOne(id);
  }

  async getUserByName(name: string): Promise<User> {
    return this.userRepository.findOne({ name });
  }

  async getUserData(name: string) {
    return this.messagesService.getUserData(name);
    // find all messages related to the user
    /*
      {
        'general': {
          [
            {
              'from': 'tkomatsu',
              'message': 'Hello',
              'date': '2020-01-01 00:00:00'
            },
            {
              'from': 'sydai',
              'message': 'Hello',
              'date': '2020-01-01 00:00:00'
            }
          ]
        },
        'random': {
          [
            {
              'from': 'tkomatsu',
              'message': 'Hello',
              'date': '2020-01-01 00:00:00'
            },
            {
              'from': 'sydai',
              'message': 'Hello',
              'date': '2020-01-01 00:00:00'
            }
          ]
        }
      }
    */
    // return {
    //   '1': [
    //     {
    //       from: 'tkomatsu',
    //       msg: 'This is first message!!',
    //       date: '2020-01-01 00:00:00'
    //     },
    //     {
    //       from: 'sydai',
    //       msg: 'This is second message!!',
    //       date: '2020-01-01 00:00:00'
    //     }
    //   ]
    // };
  }

  async getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async createUser(user: Partial<CreateUserDto>): Promise<User> {
    return this.userRepository.save(user);
  }

  async updateUser(id: number, user: Partial<UpdateUserDto>) {
    await this.userRepository.update(id, user);
    return this.userRepository.findOne(id);
  }

  async deleteUser(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
