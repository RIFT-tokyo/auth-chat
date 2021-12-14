import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getUser(id: number): Promise<User> {
    return this.userRepository.findOne(id);
  }

  async getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async createUser(user: Partial<User>): Promise<User> {
    return this.userRepository.save(user);
  }
}
