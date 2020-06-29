const webpack = require("webpack");
const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    bundle: ["./static-src/scss/index.scss", "./static-src/index.js"],
    client: ["./static-src/client.js"],
  },
  output: {
    path: path.resolve(__dirname, "./www/bundle"),
    filename: "[name].js?[hash]",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /static-src\/scss\/ad.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      // This file is used directly by `client.js`. It loads as a string to save
      // on a secondary request just for stylesheets.
      {
        test: /ad.scss$/,
        use: ["to-string-loader", "css-loader", "sass-loader"],
      },
      {
        // the file-loader emits files directly to OUTPUT_DIR/fonts
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader?name=./fonts/[name].[ext]",
      },
      {
        // Image loader
        // the file-loader emits files directly to OUTPUT_DIR/img
        test: /\.(png|gif|jpg|jpeg)$/,
        loaders: ["file-loader?name=./img/[name].[ext]"],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  optimization: {
    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      filename: "[name].css",
      path: path.resolve(__dirname, "./www/bundle"),
      chunkFilename: "[id].css",
    }),

    // Makes jQuery (required for bootstrap4) available to other JS includes
    // https://webpack.js.org/plugins/provide-plugin/
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
  ],
};
