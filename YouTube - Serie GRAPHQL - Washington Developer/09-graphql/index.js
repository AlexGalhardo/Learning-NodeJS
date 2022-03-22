const { gql, ApolloServer } = require("apollo-server");

const db = {
  usuarios: [
    {
      id: 1,
      nome: "Paulo",
      email: "paulo@email.com",
      telefone: "11 1234 1234",
      perfil: 1,
    },
    {
      id: 2,
      nome: "Lucas",
      email: "lucas@email.com",
      telefone: "34 1234 1234",
      perfil: 2,
    },
  ],
  perfis: [
    { id: 1, descricao: "ADMIN" },
    { id: 2, descricao: "NORMAL" },
  ],
};

const typeDefs = gql`
  type Usuario {
    id: Int
    nome: String
    email: String
    telefone: String
    perfil: Perfil
  }

  type Perfil {
    id: Int
    descricao: String
  }

  type Query {
    usuario(id: Int): Usuario
    perfis: [Perfil]
    usuarios: [Usuario]
  }
`;
const resolvers = {
  Usuario: {
    perfil(usuario) {
      return db.perfis.find((p) => p.id === usuario.perfil);
    },
  },
  Query: {
    usuario(obj, args) {
      return db.usuarios.find((db) => db.id === args.id);
    },
    perfis() {
      return db.perfis;
    },
    usuarios: () => db.usuarios,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen();
