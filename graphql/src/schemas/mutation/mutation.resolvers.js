import { GraphQLUpload } from 'apollo-upload-server';

export const mutationResolvers = {
  Upload: GraphQLUpload,
  Mutation: {
    async uploadFile(parent, { file }) {
      try {
        const { stream, filename, mimetype, encoding } = await file;
        console.log(stream);

        // 1. Validate file metadata.

        // 2. Stream file contents into cloud storage:
        // https://nodejs.org/api/stream.html

        // 3. Record the file upload in your DB.
        // const id = await recordFile( … )
        return { filename, mimetype, encoding };
      } catch (error) {
        console.log(error);
      }
    }
  }
};
