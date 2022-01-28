import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { Pet } from "../../../pets/database/entities/Pet";
import { User } from "../../../users/database/entities/User";

@Resolver(Pet)
export class PetsResolver {
  @Query(() => [Pet])
  async getPets(): Promise<Pet[]> {
    return Pet.find();
  }

  @Mutation(() => Pet)
  async createPet(
    @Arg("name") name: string,
    @Arg("userId") userId: string
  ): Promise<Pet> {
    const pet = Object.assign(new Pet(), { name, userId });
    await pet.save();
    return pet;
  }

  @FieldResolver(() => User)
  async user(@Root() root: Pet) {
    return User.findOne({
      where: {
        id: root.userId,
      },
    });
  }
}
