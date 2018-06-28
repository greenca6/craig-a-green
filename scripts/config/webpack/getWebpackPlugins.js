const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const SassLintPlugin = require('sasslint-webpack-plugin');
const EnvUtils = require('../../utils/envUtils');


function getWebpackPlugins(envVars, appPaths) {
  const plugins = [
    new webpack.DefinePlugin(EnvUtils.stringifyEnvVars(envVars)),
    new InterpolateHtmlPlugin(envVars),
    new SassLintPlugin({
      configFile: require.resolve('../sass-lint/.sasslintrc'),
      context: appPaths.SRC,
    }),
    new HtmlWebpackPlugin({ // Create HTML file that references bundled CSS and JS.
      template: appPaths.INDEX_EJS,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
      inject: true,
    }),
    new webpack.NoEmitOnErrorsPlugin(),
  ];

  // Add plugins specific to prod/non-prod
  if (envVars.NODE_ENV === 'production') {
    plugins.push(
      new WebpackMd5Hash(),
      new UglifyJsPlugin({ sourceMap: true }),
    );
  } else {
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
    );
  }

  return plugins;
}

module.exports = getWebpackPlugins;
