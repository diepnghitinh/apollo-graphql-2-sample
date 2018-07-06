require('./config/config');

import { addSchemaLevelResolveFunction, ApolloServer } from 'apollo-server';
import { schema } from './src/schemas';
import { rootResolveFunction } from './src/utils';

const port = process.env.PORT;

addSchemaLevelResolveFunction(schema, rootResolveFunction);

new ApolloServer({ schema }).listen({ port }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
