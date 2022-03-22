const { join } = require("path");
const {
  loadFilesSync,
  mergeTypeDefs,
  mergeResolvers,
} = require("graphql-tools");

const allTypes = loadFilesSync(join(__dirname, "modules", "**", "*.gql"));
const allResolvers = loadFilesSync(
  join(__dirname, "modules", "**", "resolvers.js")
);

const typeDefs = mergeTypeDefs(allTypes);
const resolvers = mergeResolvers(allResolvers);

module.exports = { typeDefs, resolvers };
