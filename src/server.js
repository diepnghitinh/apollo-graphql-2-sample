import {
  addSchemaLevelResolveFunction,
  ApolloServer
} from 'apollo-server-express';
import express from 'express';
import { schema } from './schemas';
import { rootResolveFunction } from './utils';
const app = express();

addSchemaLevelResolveFunction(schema, rootResolveFunction);

const server = new ApolloServer({ schema });

server.applyMiddleware({ app });

export default { server, app };
