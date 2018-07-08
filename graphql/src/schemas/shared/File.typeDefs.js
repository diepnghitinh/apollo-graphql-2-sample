const { gql } = require('apollo-server');

export const fileDefs = gql`
  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }
`;
