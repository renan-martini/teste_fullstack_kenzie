import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
  CreateDateColumn,
} from "typeorm";
import { Exclude } from "class-transformer";
import { Contact } from "./contact.entity";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  fullName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phone: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Contact, (contact) => contact.user)
  contacts: Contact[];
}
