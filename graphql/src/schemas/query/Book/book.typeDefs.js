import { gql } from 'apollo-server';

export const bookDefs = gql`
  type Book {
    name: String
    author: Author
  }
`;
