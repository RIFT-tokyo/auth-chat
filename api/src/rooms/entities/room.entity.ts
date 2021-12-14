import { User } from "src/users/entities/users.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 32 })
  name: string;

  @ManyToOne(
    () => User,
    user => user.rooms,
    // { eager: true },
  )
  owner: User;
}