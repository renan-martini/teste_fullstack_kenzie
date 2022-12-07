import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { User } from "./user.entity";
import { DecimalTransformer } from "../utils/decimalTransformer";

@Entity("contact")
export class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  fullName: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @ManyToOne(() => User)
  user: User;
}
