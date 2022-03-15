import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, username } = request.body;

    const createUserService = container.resolve(CreateUserService);
    const user = await createUserService.execute({
      name,
      username,
    });

    return response.json(user);
  }
}

export { CreateUserController };
