import { container } from "tsyringe";
import { CreatePostService } from "../services/CreatePostService";
import { GetPostByUserService } from "../services/GetPostByUserService";

const postsResolvers = {
  Mutation: {
    createPost(_, { input }) {
      const createPostService = container.resolve(CreatePostService);
      const post = createPostService.execute(input);
      return post;
    },
  },
  Query: {
    getPostByUser(_, { idUser }) {
      const getPostByUserService = container.resolve(GetPostByUserService);
      const posts = getPostByUserService.execute(idUser);
      return posts;
    },
  },
};

export default postsResolvers;
