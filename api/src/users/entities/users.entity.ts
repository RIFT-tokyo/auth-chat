import { Room } from "src/rooms/entities/room.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 32, unique: true })
  name: string;

  @Column({ length: 255 })
  email: string;

  @Column({ length: 64 })
  password: string;

  @OneToMany(
    () => Room,
    room => room.owner,
    { cascade: true },
  )
  own_rooms: Room[];

  @ManyToMany(() => Room, room => room.users)
  join_rooms: Room[];
}