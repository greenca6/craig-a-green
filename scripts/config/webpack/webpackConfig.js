const fs = require('fs');
const getWebpackPlugins = require('./getWebpackPlugins');
const getWebpackRules = require('./getWebpackRules');


class WebpackConfig {
  static create(envVars, appPaths) {
    const plugins = getWebpackPlugins(envVars, appPaths);
    const rules = getWebpackRules(envVars.NODE_ENV);

    // Use a development config by default
    const config = {
      resolve: {
        extensions: ['*', '.js', '.jsx', '.json'],
      },
      devtool: 'cheap-module-eval-source-map',
      entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?reload=true',
        appPaths.INDEX_JSX,
      ],
      output: {
        path: appPaths.BUILD_DIR,
        publicPath: envVars.PECOS_DEPLOY_URL,
        filename: '[name].js',
      },
      plugins,
      module: { rules },
    };

    // Production build configurations
    if (envVars.NODE_ENV === 'production') {
      config.devtool = 'source-map';
      config.entry = [appPaths.INDEX_JSX];
      config.output.filename = '[name].[chunkhash].js';
    }

    // Add optional SCSS entrypoint
    if (fs.existsSync(appPaths.INDEX_SCSS)) {
      config.entry.push(appPaths.INDEX_SCSS);
    }

    return config;
  }
}

module.exports = WebpackConfig;
