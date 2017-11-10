const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
let isDev = false;
const env = process.env.NODE_ENV;
isDev = env === "development" ? true : false;
console.log(isDev ? "开发环境" : "生产环境");
const htmlsMap = [
  {
    template: "index",
    chunks: ["commons", "index"]
  },
  {
    template: "d3",
    chunks: ["commons", "d3"]
  }
];

const htmlFiles = (function() {
  let result = [];
  htmlsMap.map((item) => {
    result.push(
      new HtmlWebpackPlugin({
        template: `./src/template/${item.template}.html`,
        chunks: item.chunks,
        filename: `${item.template}.html`
      })
    );
  });
  return result;
}());

module.exports = {
  entry: {
    commons: ["jquery", "bootstrap"], 
    index: ["./src/template/index.js"],
    d3: ["./src/template/d3.js"]
  },
  devtool: "eval-source-map",
  output: {
    path: path.resolve("build"),
    publicPath: isDev ? "/" : "./",
    filename: "[name]-[chunkhash].js"
  },
  module: {
    rules: [{
      test: /\.html$/,
      loader: "html-loader"
    }, {
      test: /\.less$/,
      loader: "style-loader!css-loader!less-loader"
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }, {
      test: /\.(eot|woff|ttf|eot|woff2)$/, loader: "file-loader"
    },{
      test: /\.js$/,
      loader: "imports-loader?define=>false"
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ["babel-loader"]
    }, {
      test: /.*\.(gif|png|jpe?g|svg)$/i,
      loader: "file-loader?name=img-[sha512:hash:base64:7].[ext]"
    },{
      test: /bootstrap.+\.(jsx|js)$/, loader: "imports-loader?jQuery=jquery,$=jquery,this=>window"
    }
    ]
  },
  plugins:[
    new webpack.optimize.CommonsChunkPlugin({
      name: "commons",
      filename: "[name].js",
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require("./manifest.json"),
    })
  ].concat( htmlFiles)
    .concat(
      isDev ?
        // 开发环境
        [
          new webpack.HotModuleReplacementPlugin(),
          new webpack.NamedModulesPlugin(),
          new BundleAnalyzerPlugin(),
        ]
        :
        // 生产环境
        [
          new webpack.optimize.UglifyJsPlugin({
            compress: {
              warnings: false
            }
          }),
          new webpack.DefinePlugin({
            "process.env": {
              NODE_ENV: JSON.stringify("production")
            }
          })
        ]
    )
};
