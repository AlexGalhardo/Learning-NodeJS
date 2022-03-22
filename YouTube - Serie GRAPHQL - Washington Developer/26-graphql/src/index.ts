import { ApolloServer, PubSub } from "apollo-server";

import resolvers from "./resolvers";
import typeDefs from "./schemas";

const pub = new PubSub();

const server = new ApolloServer({ resolvers, typeDefs, context: { pub } });

server.listen().then(({ url }) => console.log(url));
