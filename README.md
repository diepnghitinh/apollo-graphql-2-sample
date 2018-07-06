# Sample Apollo GraphQL 2

This sample is made with nice strucure, configurable and including Unit Test. Very heplful for GraphQL beginner.

# Setup

## For development environments

Step 1: `npm install`

Step 2: Copy and Edit `config/config.example.json` file to `config/config.json`. If you're about to add more environments, you also need to edit `pakage.json` to set `NODE_ENV`

Step 3: Run `npm run start:dev` or your custom scripts

## For production environment

Step 1: `npm install`

Step 2: Set environment variables.
IMPORTANT: Do not set in `config` file, configuration code **won't** run if `NODE_ENV` is `production` or not set

Step 3: Run `npm start`
