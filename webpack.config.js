const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
let isDev = false;
const env = process.env.NODE_ENV;
isDev = env === 'development' ? true : false;
module.exports = {
  entry: {
    index: ['./assets/js/index.js']
  },
  devtool: 'source-map',
  output: {
    path: path.resolve('build'),
    publicPath: isDev ? '/' : `${__dirname}/build`,
    filename: '[name]-[hash].js'
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      }
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'template/index.html'
    })
  ]
}
