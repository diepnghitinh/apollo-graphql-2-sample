import { gql } from 'apollo-server';

export const authorDefs = gql`
  type Author {
    name: String
    books: [Book]
  }
`;
