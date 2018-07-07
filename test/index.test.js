import 'babel-polyfill';
import { expect } from 'chai';
import request from 'supertest';
import server from '../src/server';

before(done => {
  require('./api-simlulator');
  console.log('-------- Start Tets Suites --------');
  done();
});

it('Query books()', done => {
  request(server.app)
    .post('/graphql')
    .send({
      query: `
        {
          books {
            name
            author {
              name
              books {
                name
              }
            }
          }
        }
      `
    })
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      const data = res.body.data;
      expect(data.books).to.be.an('array');
      expect(data.books[0].name).to.be.an('string');
      expect(data.books[0].author.name).to.be.an('string');
      expect(data.books[0].author.books).to.be.an('array');
      expect(data.books[0].author.books[0].name).to.be.an('string');
      done();
    });
});

it('Query authors()', done => {
  request(server.app)
    .post('/graphql')
    .send({
      query: `
      {
        authors {
          name
          books {
            name
            author {
              name
            }
          }
        }
      }
      `
    })
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      const data = res.body.data;
      expect(data.authors).to.be.an('array');
      expect(data.authors[0].name).to.be.an('string');
      expect(data.authors[0].books).to.be.an('array');
      expect(data.authors[0].books[0].name).to.be.an('string');
      expect(data.authors[0].books[0].author.name).to.be.an('string');
      done();
    });
});

after(done => {
  console.log('-------- Finish Tets Suites --------');
  done();
});
