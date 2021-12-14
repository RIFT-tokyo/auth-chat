import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get(':id')
  async getUser(@Param('id') id: number) {
    return this.userService.getUser(id);
  }

  @Get('')
  async getUsers() {
    return this.userService.getUsers();
  }

  @Post('')
  async createUser(@Body() user: CreateUserDto) {
    return this.userService.createUser(user);
  }
}
