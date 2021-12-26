import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesGateway } from './messages.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { UsersModule } from '../users/users.module';
import { ChannelsModule } from 'src/channels/channels.module';
// import { RoomsModule } from '../rooms/rooms.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Message]),
    UsersModule,
    // RoomsModule,
    ChannelsModule,
  ],
  providers: [MessagesGateway, MessagesService],
})
export class MessagesModule {}
