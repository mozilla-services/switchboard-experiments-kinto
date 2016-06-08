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
    new webpack.IgnorePlugin(/^(buffertools)$/), // unwanted "deeper" dependency
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ],
  node: {
    Buffer: "mock",
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ["babel"],
      }
    ]
  }
};
