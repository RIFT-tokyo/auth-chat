import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { User } from './entities/users.entity';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getUser(id: number): Promise<User> {
    return this.userRepository.findOne(id);
  }

  async getUserByName(name: string): Promise<User> {
    return this.userRepository.findOne({ name });
  }

  async getUserData(name: string) {
    // find all messages related to the user
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
