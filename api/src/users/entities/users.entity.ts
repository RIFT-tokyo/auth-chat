import { Room } from "src/rooms/entities/room.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 32 })
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
  rooms: Room[];
}