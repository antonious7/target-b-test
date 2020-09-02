import { gql } from 'apollo-server-express';

const typeDefs = gql`

type TextInputType {
  id: ID!
  text: String!
}

input TextInput {
  text: String!
}

type Mutation {
    updateText(id: ID!, input: TextInput!): TextInputType!
}

type Query {
    text: TextInputType
}`;

export default typeDefs;
