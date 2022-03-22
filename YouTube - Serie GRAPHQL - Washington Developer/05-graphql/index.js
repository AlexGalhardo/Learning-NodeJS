const { gql, ApolloServer } = require('apollo-server');

/**
 * Scalar Types
 * - Int
 * - Float
 * - String
 * - Boolean
 * - ID
 */

const typeDefs = gql`
	type Query {
		idade: Int
		salario: Float
		nome: String
		ativo: Boolean
		id: ID
		tecnologias: [String!]!
	}
`;
const resolvers = {
	Query: {
		tecnologias() {
			return [ 'CSS' ];
		},
		idade() {
			return 18;
		},
		salario() {
			return 12345.98;
		},
		nome() {
			return 'GraphQL';
		},
		ativo() {
			return true;
		},
		id() {
			return 12345667;
		}
	}
};

const server = new ApolloServer({
	typeDefs,
	resolvers
});

server.listen();
