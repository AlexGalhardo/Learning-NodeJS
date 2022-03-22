import { gql } from "apollo-server";

export default gql`
  type User {
    id: Int
    name: String
    email: String
  }

  type Query {
    users: [User]
  }
`;
