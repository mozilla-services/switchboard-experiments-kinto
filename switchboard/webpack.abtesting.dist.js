var webpack = require("webpack");

module.exports = {
  cache: true,
  context: __dirname + "/src",
  entry: "./ab_testing.js",
  output: {
    path: "./dist",
    publicPath: "/dist/",
    filename: "ABTesting.js",
    library: "ABTesting",
    libraryTarget: "umd"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ],
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [__dirname + "/src"],
        loaders: ["babel-loader"],
      }
    ]
  }
};
