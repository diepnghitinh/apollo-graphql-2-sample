import { gql } from 'apollo-server';

export const queryDefs = gql`
  type Query {
    authors: [Author]
    books: [Book]
  }
`;
