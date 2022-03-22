const { ApolloServer } = require("apollo-server");
const graphql = require("./src/graphql");
const UsuarioCadastroService = require("./src/services/UsuarioCadastroService");

const server = new ApolloServer({
  ...graphql,
  context: () => ({
    usuarioCadastroService: UsuarioCadastroService,
  }),
});

server.listen().then(({ url }) => console.log(url));
