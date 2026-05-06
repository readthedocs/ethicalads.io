const webpack = require("webpack");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./static-src/index.js",
  output: {
    path: path.resolve(__dirname, "./ethicalads-theme/static/dist"),
    filename: "bundle.js",
  },
  optimization: {
    minimizer: [new TerserPlugin()],
  },
};
