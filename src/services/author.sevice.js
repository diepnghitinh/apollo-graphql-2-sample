const authors = [
  { id: 1, name: 'Author1', books: [1, 3] },
  { id: 2, name: 'Author2', books: [2] }
];

export default {
  findAll() {
    return authors;
  },

  findOne(id) {
    return authors.find(author => author.id == id);
  }
};
