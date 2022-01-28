import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "../../../users/database/entities/User";

@Entity("pets")
@ObjectType()
export class Pet extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  @Field(() => ID)
  id: string;

  @Column()
  @Field()
  name: string;

  @ManyToOne(() => User, { nullable: true })
  @Field(() => User)
  user?: User;

  @Column()
  @Field()
  userId: string;
}
