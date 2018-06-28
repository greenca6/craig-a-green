/* eslint-disable import/no-dynamic-require, global-require */
const fs = require('fs');
const appPaths = require('./paths');

const packageName = require(appPaths.PACKAGE_JSON).name;

const getEnv = () => {
  if (!process.env.NODE_ENV) {
    throw new Error('The NODE_ENV environment variable is required but was not set.');
  }

  const defaultEnvVars = {
    NODE_ENV: process.env.NODE_ENV,
  };

  // Load env variables from the .env file
  if (fs.existsSync(appPaths.DOT_ENV)) {
    // eslint-disable-next-line global-require
    require('dotenv-expand')(require('dotenv').config({ path: appPaths.DOT_ENV }));
  }

  // Export NODE_ENV and REACT_* environment variables only
  return Object.keys(process.env).filter(key => (/^REACT_/i).test(key))
    .reduce(
      (env, key) => {
        // eslint-disable-next-line no-param-reassign
        env[key] = process.env[key];
        return env;
      },
      defaultEnvVars,
    );
};

module.exports = getEnv;
