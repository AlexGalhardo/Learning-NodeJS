import { ApolloServer } from "apollo-server";

import resolvers from "./resolvers";
import typeDefs from "./typeDefs";

const server = new ApolloServer({ resolvers, typeDefs });

server.listen().then(({ url }) => console.log(url));
