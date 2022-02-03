import { Request, Response } from "express";
import { SessionService} from "../services/SessionService";

export class SessionController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body
    const service = new SessionService();
    const user = await service.execute({email, password});
    if(user instanceof Error) {
      return response.status(400).json(user.message);
    }
    return response.status(200).json(user);
  }
}