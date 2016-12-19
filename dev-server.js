const webpack = require('webpack');
const config = require('./webpack.config.js');
config.entry.index.unshift('webpack-dev-server/client?http://localhost:8000/', 'webpack/hot/dev-server');
const WebpackDevServer = require('webpack-dev-server');
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
  hot: true,
  stats: { colors: true }
})

server.listen(8000);
