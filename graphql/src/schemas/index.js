// mutation root
import { mutationResolvers } from './mutation/mutation.resolvers';
import { mutationDefs } from './mutation/mutation.typeDefs';
// Author
import { authorResolvers } from './query/Author/author.resolvers';
import { authorDefs } from './query/Author/author.typeDefs';
// Book
import { bookResolvers } from './query/Book/book.resolvers';
import { bookDefs } from './query/Book/book.typeDefs';
// query root
import { queryResolvers } from './query/query.resolvers';
import { queryDefs } from './query/query.typeDefs';
// File
import { fileDefs } from './shared/File.typeDefs';

export const typeDefs = [
  authorDefs,
  bookDefs,
  fileDefs,
  queryDefs,
  mutationDefs
];
export const resolvers = [
  authorResolvers,
  bookResolvers,
  queryResolvers,
  mutationResolvers
];
