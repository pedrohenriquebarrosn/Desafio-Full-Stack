import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import Contact from "./contacts.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 45 })
  name: string;

  @Column({ type: "varchar", length: 60, unique: true })
  email: string;

  @Column({ type: "varchar", length: 11, unique: true })
  telefone: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string | Date;

  @OneToMany(() => Contact, (contact) => contact.user)
  contacts: Contact[];
}

export default User;
