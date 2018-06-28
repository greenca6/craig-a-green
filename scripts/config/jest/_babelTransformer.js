const babelJest = require('babel-jest');
const BabelConfig = require('../babel/babelConfig');

const NODE_ENV = 'test'; // Jest runs in the 'test' environment by default
const babelConfig = BabelConfig.create(NODE_ENV);

module.exports = babelJest.createTransformer({
  presets: babelConfig.presets,
  plugins: babelConfig.plugins,
  babelrc: false,
});
