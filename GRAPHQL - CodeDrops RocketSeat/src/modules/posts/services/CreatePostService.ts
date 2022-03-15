import Post from "@models/Post";
import { injectable } from "tsyringe";

interface IPostRequest {
  content: string;
  author: string;
}

@injectable()
class CreatePostService {
  async execute(data: IPostRequest) {
    const post = await Post.create(data);
    return post;
  }
}

export { CreatePostService };
