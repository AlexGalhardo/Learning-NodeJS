const { gql, ApolloServer } = require('apollo-server');

const produtos = [
	{
		id: 1,
		nome: 'Notebook',
		valor: 12000.32
	},
	{
		id: 2,
		nome: 'TV',
		valor: 6000.32
	},
	{
		id: 3,
		nome: 'Monitor',
		valor: 2000.0
	}
];

const usuarios = [
	{
		id: 1,
		nome: 'Paulo',
		salario: 1234.54,
		ativo: true,
		idade: 23
	},
	{
		id: 2,
		nome: 'Lucas',
		salario: 4321.54,
		ativo: false,
		idade: 30
	}
];

const typeDefs = gql`
	type Produto {
		id: ID
		nome: String
		valor: Float
	}

	type Usuario {
		idade: Int
		salario: Float
		nome: String
		ativo: Boolean
		id: ID
	}

	type Query {
		usuarios: [Usuario]
		produtos: [Produto]
		usuario(id: Int, nome: String): Usuario
	}
`;
const resolvers = {
	Query: {
		usuarios() {
			return usuarios;
		},
		usuario(_, args) {
			const { id, nome } = args;
			if (id) return usuarios.find((usuario) => usuario.id === id);
			return usuarios.find((usuario) => usuario.nome === nome);
		},
		produtos() {
			return produtos;
		}
	}
};

const server = new ApolloServer({
	typeDefs,
	resolvers
});

server.listen();
