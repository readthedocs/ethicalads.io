const webpack = require("webpack");
const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./static-src/index.js",
  output: {
    path: path.resolve(__dirname, "./ethicalads-theme/static/dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        // https://webpack.js.org/guides/asset-management/#loading-fonts
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                // publicPath is the relative path of the resource to the context
                // e.g. for ./css/admin/main.css the publicPath will be ../../
                // while for ./css/main.css the publicPath will be ../
                // https://webpack.js.org/plugins/mini-css-extract-plugin/#the-publicpath-option-as-function
                return path.relative(path.dirname(resourcePath), context) + "/theme/dist/";
              },
            },
          },
          "css-loader",
          "sass-loader",
        ],
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
