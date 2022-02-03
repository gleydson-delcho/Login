import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetAllUsersController } from "./controllers/GetAllUsersController";
import { SessionController } from "./controllers/SessionController";
import { ensureAuth } from "./middlewares/ensuredAuth";

const routes = Router();

routes
  .post("/users", new CreateUserController().handle)
  .post("/login", new SessionController().handle)
  .get("/users", ensureAuth(), new GetAllUsersController().handle)

  export { routes };