import { User } from "src/users/entities/users.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 32 })
  name: string;

  @ManyToOne(
    () => User,
    user => user.own_rooms,
  )
  owner: User;

  @ManyToMany(() => User, user => user.join_rooms)
  @JoinTable()
  users: User[];
}