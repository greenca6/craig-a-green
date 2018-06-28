// Set these first to ensure React builds in production mode
process.env.NODE_ENV = 'production';
process.env.BABEL_ENV = 'production';

const webpack = require('webpack');

const path = require('path');
const WebpackConfig = require('./config/webpack/webpackConfig');
const APP_PATHS = require('./config/paths');
const getEnv = require('./config/env');


const config = WebpackConfig.create(getEnv(), APP_PATHS);
webpack(config).run((error, stats) => {
  if (error) {
    console.error(error);
    return 1;
  }

  if (stats.hasErrors()) {
    const errors = stats.toJson().errors.join('\n');
    throw new Error(`Webpack reported errors during the build. Errors:\n${errors}`);
  }

  if (stats.hasWarnings()) {
    const warnings = stats.toJson().warnings.join('\n');
    console.warn(`Webpack generated the following warnings:\n${warnings}`);
  }

  console.log(stats.toString());

  console.log(`Successfully compiled to directory ${path.basename(APP_PATHS.BUILD_DIR)}/.`);

  return 0;
});

module.exports = { run, onComplete };
