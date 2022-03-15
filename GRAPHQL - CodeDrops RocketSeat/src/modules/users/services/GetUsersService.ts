import { User } from "@models/User";
import { injectable } from "tsyringe";

@injectable()
class GetUsersService {
  async execute() {
    const users = await User.find();
    return users;
  }
}

export { GetUsersService };
