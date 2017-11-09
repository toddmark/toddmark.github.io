const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    bundle: [
      "react",
      "react-dom",
      //其他库
    ],
  },
  output: {
    path: path.resolve("build"),
    filename: "[name].js",
    library: "[name]_library"
  },
  plugins: [
    new webpack.DllPlugin({
      path: "./build/bundle.manifest.json",
      name: "[name]_library",
    })
  ]
};
