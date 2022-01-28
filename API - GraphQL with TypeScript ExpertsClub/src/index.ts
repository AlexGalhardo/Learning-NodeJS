import "reflect-metadata";
import express from "express";
import { buildSchema } from "type-graphql";
import { UsersResolver } from "./modules/users/graphql/resolvers/UsersResolver";
import { ApolloServer } from "apollo-server-express";
import { connect } from "./config/database";
import { PetsResolver } from "./modules/pets/graphql/resolvers/PetsResolver";

async function init() {
  await connect();
  const app = express();
  const port = 4010;
  const schema = await buildSchema({
    resolvers: [UsersResolver, PetsResolver],
  });
  const apolloServer = new ApolloServer({
    schema,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.listen(port, () => console.log(`🚀 Server listenning on port ${port}!`));
}

init();
