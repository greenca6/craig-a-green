process.env.NODE_ENV = 'development';
process.env.BABEL_ENV = 'development';

const bs = require('browser-sync');
const historyApiFallback = require('connect-history-api-fallback');
const webpack = require('webpack');
const webpackDevMiddleWare = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const WebpackConfig = require('./config/webpack/webpackConfig');
const getEnv = require('./config/env');
const APP_PATHS = require('./config/paths');

const config = WebpackConfig.create(getEnv(), APP_PATHS);

const bundler = webpack(config);

// Create a dev server named after the project ID
const devServer = bs.create(process.env.PECOS_PROJECT_ID);

// Start the server
devServer.init({
  open: false,
  port: 3000,
  ui: {
    port: 3001,
  },
  cors: true,
  server: {
    baseDir: APP_PATHS.SRC,
    middleware: [
      historyApiFallback(),
      webpackDevMiddleWare(bundler, {
        publicPath: config.output.publicPath,

        watchOptions: { poll: true },

        // Suppress noisy webpack output
        noInfo: true,
        quiet: false,
        stats: {
          assets: false,
          colors: true,
          version: false,
          hash: false,
          timings: false,
          chunks: false,
          chunkModules: false,
        },
      }),

      webpackHotMiddleware(bundler),
    ],
  },

  // Browsersync only needs to watch for index.html file - webpack watches source files already
  files: [APP_PATHS.INDEX_EJS],
});
