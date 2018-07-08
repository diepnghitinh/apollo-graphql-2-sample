const { gql } = require('apollo-server');

export const mutationDefs = gql`
  type Mutation {
    uploadFile(file: Upload!): File!
  }
`;
