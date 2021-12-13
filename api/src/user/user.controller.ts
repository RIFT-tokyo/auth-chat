import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async getUser(@Param('id') id: number) {
    return this.userService.getUser(id);
  }

  @Get('')
  async getUsers() {
    return this.userService.getUsers();
  }

  @Post('test')
  async testUser(@Body() user: CreateUserDto) {
    return user;
  }

  @Post('')
  async createUser(@Body() user: CreateUserDto) {
    return this.userService.createUser(user);
  }
}
