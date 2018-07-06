// node modules
import { makeExecutableSchema } from 'apollo-server';
// Author schema and resolvers
import { authorResolvers } from './Author/author.resolvers';
import { authorDefs } from './Author/author.typeDefs';
// Book schema and resolvers
import { bookResolvers } from './Book/book.resolvers';
import { bookDefs } from './Book/book.typeDefs';
// Query schema and resolvers
import { queryResolvers } from './Query/query.resolvers';
import { queryDefs } from './Query/query.typeDefs';

// Combine typeDefs and resolvers
const typeDefs = [authorDefs, bookDefs, queryDefs];
const resolvers = [authorResolvers, bookResolvers, queryResolvers];

// Export schema
export const schema = makeExecutableSchema({ typeDefs, resolvers });
