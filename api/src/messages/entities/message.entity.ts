import { User } from "src/users/entities/users.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
// import { Room } from 'src/rooms/entities/room.entity';
import { Channel } from '../../channels/entities/channel.entity';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Channel, { nullable: false })
  channel!: Channel;

  @ManyToOne(() => User, { nullable: false })
  sender!: User;

  @Column({ length: 140 })
  message: string;

  @CreateDateColumn()
  created_at: Date;
}


// export interface Message {
//   server: string;
//   channel: string;
//   from: string;
//   msg: string;
// }
