const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    bundle: [
      "react",
      "react-dom",
      "jquery", 
      "bootstrap"
      //其他库
    ],
  },
  output: {
    path: path.resolve("build"),
    filename: "[name].js",
    library: "[name]_[chunkhash]_library"
  },
  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      name: "[name]_[chunkhash]_library",
      path: path.join(__dirname, "/build/manifest.json"),
    })
    // new webpack.DllPlugin({
    //   path: "./build/bundle.manifest.json",
    //   name: "[name]_library",
    // })
  ]
};
