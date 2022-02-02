import { Entity, Column, CreateDateColumn, PrimaryColumn, BeforeInsert, BeforeUpdate} from "typeorm";
import { v4 as uuid } from "uuid";
import bcrypt from 'bcrypt';

@Entity("users")
export class User {
  
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email:string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  constructor(){
    if(!this.id){
      this.id = uuid();
    }
  }
}