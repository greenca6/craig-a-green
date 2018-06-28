// Analyze the bundle in prod mode
process.env.NODE_ENV = 'production';
process.env.BABEL_ENV = 'production';

const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const WebpackConfig = require('./config/webpack/webpackConfig');
const getEnv = require('./config/env');
const APP_PATHS = require('./config/paths');

const config = WebpackConfig.create(getEnv(), APP_PATHS);

config.plugins.push(new BundleAnalyzerPlugin({ analyzerHost: '0.0.0.0' }));

const compiler = webpack(config);

compiler.run((error) => {
  if (error) {
    throw error;
  }
});

module.exports = { run };
