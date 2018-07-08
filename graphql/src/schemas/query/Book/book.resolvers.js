import { authorService } from '../../../services';

export const bookResolvers = {
  Book: {
    author(book) {
      return authorService.findOne(book.author);
    }
  }
};
