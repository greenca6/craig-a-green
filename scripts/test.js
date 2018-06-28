process.env.NODE_ENV = 'test';
process.env.BABEL_ENV = 'test';

const jest = require('jest');
const APP_PATHS = require('./config/paths');
const JestConfig = require('./config/jest/jestConfig');

const config = JestConfig.create(APP_PATHS);


jest.run(JSON.stringify(config)).then((error) => {
  module.exports.onComplete(error);
});
