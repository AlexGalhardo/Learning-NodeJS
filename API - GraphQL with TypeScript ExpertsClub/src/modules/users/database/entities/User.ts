import {
  BaseEntity,
  BeforeInsert,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";
import bcrypt from "bcryptjs";
import { Field, ID, ObjectType } from "type-graphql";
import { Pet } from "../../../pets/database/entities/Pet";

@Entity("users")
@ObjectType()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  @Field(() => ID)
  id: string;

  @Column()
  @Field()
  firstname: string;

  @Column()
  @Field()
  lastname: string;

  @Column({ unique: true })
  @Field()
  email: string;

  @Field(() => [Pet])
  pets: Pet[];

  password: string;

  @Column()
  password_hash: string;

  @BeforeInsert()
  private async hashPassword() {
    this.password_hash = await bcrypt.hash(this.password, 8);
  }
}
