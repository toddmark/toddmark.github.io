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
    publicPath: isDev ? '/' : `./`,
    filename: '[name]-[hash].js'
  },
  // externals: {
  //   react: 'React',
  //   'react-dom':'ReactDOM',
  // },
  module: {
    loaders: [{
        test: /\.html$/,
        loader: 'html'
      }, {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      }, {
        test: /\.jsx?$/,
        loaders: ['babel-loader?presets[]=es2015,presets[]=react']
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
