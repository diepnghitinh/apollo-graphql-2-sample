import { authorService, bookService } from '../../services';

export const queryResolvers = {
  Query: {
    authors() {
      return authorService.findAll();
    },

    books() {
      return bookService.findAll();
    }
  }
};
