const books = [
  { id: 1, name: 'Book1', author: 1 },
  { id: 2, name: 'Book2', author: 2 },
  { id: 3, name: 'Book3', author: 1 }
];

export default {
  findAll() {
    return books;
  },

  findMany(ids) {
    return books.filter(book => ids.includes(book.id));
  },

  findOne(id) {
    return books.find(book => book.id == id);
  }
};
