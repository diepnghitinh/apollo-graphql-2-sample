// node modules
import { makeExecutableSchema } from 'apollo-server';
// Author
import { authorResolvers } from './query/Author/author.resolvers';
import { authorDefs } from './query/Author/author.typeDefs';
// Book
import { bookResolvers } from './query/Book/book.resolvers';
import { bookDefs } from './query/Book/book.typeDefs';
import { queryResolvers } from './query/query.resolvers';
// query root
import { queryDefs } from './query/query.typeDefs';
// Export schema
export const schema = makeExecutableSchema({
  typeDefs: [authorDefs, bookDefs, queryDefs],
  resolvers: [authorResolvers, bookResolvers, queryResolvers]
});
