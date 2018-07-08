import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { resolvers, typeDefs } from './schemas';

const app = express();

const server = new ApolloServer({ resolvers, typeDefs });

server.applyMiddleware({ app });

export default { server, app };
