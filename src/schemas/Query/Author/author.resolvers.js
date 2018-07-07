import { bookService } from '../../../services';

export const authorResolvers = {
  Author: {
    books(author) {
      return bookService.findMany(author.books);
    }
  }
};
