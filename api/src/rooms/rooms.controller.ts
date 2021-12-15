import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { JoinRoomDto } from './dto/join-room.dto';
import { LeaveRoomDto } from './dto/leave-room.dto';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Post()
  create(@Body() createRoomDto: CreateRoomDto) {
    return this.roomsService.create(createRoomDto);
  }

  @Get()
  findAll() {
    return this.roomsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.roomsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateRoomDto: UpdateRoomDto) {
    return this.roomsService.update(id, updateRoomDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.roomsService.remove(id);
  }

  @Post(':id/join')
  join(@Param('id') id: number, @Body() joinRoomDto: JoinRoomDto) {
    return this.roomsService.join(id, joinRoomDto);
  }

  @Post(':id/leave')
  leave(@Param('id') id: number, @Body() leaveRoomDto: LeaveRoomDto) {
    return this.roomsService.leave(id, leaveRoomDto);
  }
}
