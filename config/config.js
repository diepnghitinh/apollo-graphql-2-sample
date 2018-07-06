let env =
  process.env.NODE_ENV ||
  (() => {
    throw 'NODE_ENV environment variable is not set';
  })();

if (env !== 'production') {
  let config = require('./config.json');
  let envConfig = config[env];

  Object.keys(envConfig).forEach(key => {
    process.env[key] = envConfig[key];
  });
}
