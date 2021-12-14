import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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

  @Put(':id')
  async updateUser(@Param('id') id: number, @Body() user: CreateUserDto) {
    return this.userService.updateUser(id, user);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }
}
