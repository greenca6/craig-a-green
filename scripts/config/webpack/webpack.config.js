const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { DIST_DIR, INDEX_HTML, INDEX_JS } = require('../paths');

module.exports = {
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    INDEX_JS,
  ],
  devtool: 'inline-source-map',
  // devServer: {
  //   contentBase: DIST_DIR,
  //   hot: true,
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: INDEX_HTML,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: '[name].js',
    path: DIST_DIR,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader'),
        options: {
          babelrc: false,
          presets: [
            require.resolve('babel-preset-es2015'),
            require.resolve('babel-preset-react'),
            require.resolve('babel-preset-stage-3'),
          ],
          plugins: [
            require.resolve('babel-plugin-transform-react-jsx-source'),
            require.resolve('babel-plugin-transform-class-properties'),
          ],
          cacheDirectory: true,
        },
      },
    ]
  },
};
