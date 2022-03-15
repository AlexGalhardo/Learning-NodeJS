import { container } from "tsyringe";
import { CreateUserService } from "../services/CreateUserService";
import { GetUsersService } from "../services/GetUsersService";

const usersResolvers = {
  Query: {
    getAllUsers() {
      const getUsersService = container.resolve(GetUsersService);
      const users = getUsersService.execute();
      return users;
    },
  },
  Mutation: {
    createUser(_, { input }) {
      const createUserService = container.resolve(CreateUserService);
      const user = createUserService.execute(input);
      return user;
    },
  },
};

export default usersResolvers;
