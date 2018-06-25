const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./config/webpack/webpack.config');

const devServerOptions = {
  contentBase: './dist',
  hot: true,
  host: 'localhost:3000',
};

WebpackDevServer.addDevServerEntrypoints(config, devServerOptions);

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(3000, 'localhost', () => {
  console.log('dev server listening on port 3000');
});
