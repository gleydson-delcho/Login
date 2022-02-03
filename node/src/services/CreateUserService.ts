import { getRepository } from "typeorm";
import { User } from "../entities/User";
import bcrypt, { hash } from 'bcrypt';

type UserRequest = {
  email: string;
  name: string;
  password: string;
}

export class CreateUserService {
  async execute({ email, name, password}: UserRequest): Promise<User | Error>{
    const repo = getRepository(User)

    if(await repo.findOne({email})) {
      return new Error("User already exists!")
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = repo.create({
      name,
      email,
      password : hashedPassword
    })

    await repo.save(user);
    return user;
  }
}