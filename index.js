require('./config/config');
import server from './src/server';

const port = process.env.PORT;

// server.app.listen({ port }).then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });

server.app.listen({ port }, () => {
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.server.graphqlPath}`
  );
});
