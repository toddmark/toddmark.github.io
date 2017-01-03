const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
let isDev = false;
const env = process.env.NODE_ENV;
isDev = env === 'development' ? true : false;
console.log(isDev ? '开发环境' : '生产环境');
module.exports = {
  entry: {
    index: ['./index.js']
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
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
      }, {
        test: /\.(eot|woff|ttf|eot|woff2)$/, loader: "file-loader" 
      }, {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader?presets[]=es2015,presets[]=react']
      }, {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loader: "file-loader?name=img-[sha512:hash:base64:7].[ext]"
      },{ 
        test: /bootstrap.+\.(jsx|js)$/, loader: 'imports?jQuery=jquery,$=jquery,this=>window' 
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: 'template/index.html'
    })
  ].concat(
    isDev ?
    new webpack.HotModuleReplacementPlugin() :
    [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      })
    ]
  )
}
