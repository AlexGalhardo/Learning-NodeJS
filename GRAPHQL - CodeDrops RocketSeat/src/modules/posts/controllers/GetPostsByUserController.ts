import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetPostByUserService } from "../services/GetPostByUserService";

class GetPostsByUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const getPostByUserService = container.resolve(GetPostByUserService);
    const posts = await getPostByUserService.execute(id);
    return response.json(posts);
  }
}

export { GetPostsByUserController };
