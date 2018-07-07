import server from './src/server';

const port = process.env.PORT;

server.app.listen({ port }, () => {
  console.log(
    `🚀 GraphQL server ready at http://localhost:${port}${
      server.server.graphqlPath
    }`
  );
});
