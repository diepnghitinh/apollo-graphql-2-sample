import express from 'express';

const port = process.env.SIMULATOR_API_PORT;
const app = express();

const authors = [
  { id: 1, name: 'Author1', books: [1, 3] },
  { id: 2, name: 'Author2', books: [2] }
];

const books = [
  { id: 1, name: 'Book1', author: 1 },
  { id: 2, name: 'Book2', author: 2 },
  { id: 3, name: 'Book3', author: 1 }
];

app.get('/ping', (req, res) => res.send({ status: 'OK' }));
app.get('/author/findall', (req, res) => res.json(authors));
app.get('/author/findone/:id', (req, res) => res.json(authors[1]));
app.get('/book/findall', (req, res) => res.json(books));
app.post('/book/findmany', (req, res) => res.json(books));
app.get('/book/findone/:id', (req, res) => res.json(books[1]));

app.listen(port, () => console.log(`API simulator listening on port ${port}!`));
