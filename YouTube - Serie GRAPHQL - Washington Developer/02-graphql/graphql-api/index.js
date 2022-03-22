const { ApolloServer, gql } = require('apollo-server');
const { products, clients } = require('../rest-api/api.json');

const typeDefs = gql`
	type Address {
		street: String
		number: Int
	}

	type Client {
		id: Int
		name: String
		email: String
		address: Address
	}

	type Product {
		id: Int
		name: String
		price: Float
	}

	type Query {
		clients: [Client]
		products: [Product]
		product(id: Int): Product
		client(id: Int): Client
	}
`;

const resolvers = {
	Query: {
		products() {
			return products;
		},
		product(_, { id }) {
			return products.find((p) => p.id === id);
		},
		clients() {
			return clients;
		},
		client(_, { id }) {
			return clients.find((c) => c.id === id);
		}
	}
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`API GraphQL running ${url}`));
