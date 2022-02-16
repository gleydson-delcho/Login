import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { getRepository } from "typeorm";
import { User } from "../entities/User";

type UserRequest = {
  email: string;
  password: string;
}


export class SessionService {
  async execute({email, password}: UserRequest) {
    const repo = getRepository(User);
    const user =  await repo.findOne({email});
    
    if(!user) {
      return new Error("Email does not exists!");
    }
    
    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch) {
      return new Error("User or password invalide!")
    }

    const token = sign({} , process.env.SECRET_JWT, {
      subject: user.id,
      expiresIn: '1d'
    });
    

    return {user: {id: user.id, email: user.email, name: user.name}, auth: true, token};
  }
}