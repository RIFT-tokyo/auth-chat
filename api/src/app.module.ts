import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/entities/users.entity';
import { RoomsModule } from './rooms/rooms.module';
import { Room } from './rooms/entities/room.entity';

@Module({
  imports: [
  ConfigModule.forRoot({
      envFilePath: '../.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [User, Room],
      synchronize: true,
      logging: true,
    }),
    UsersModule,
    RoomsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
