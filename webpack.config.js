const path = require("path");
const webpack = require("webpack");
const InlineEnvironmentVariablesPlugin = require("inline-environment-variables-webpack-plugin");
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const dotenv = require('dotenv').config( {
  path: path.join(__dirname, '.env')
} );

console.log(dotenv, "dotenv")

module.exports = {
  entry: {
    app: ["@babel/polyfill", "./src/index.js"],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "app.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-env"],
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('development'),
            'token': JSON.stringify(dotenv.parsed.token)
        }
    })
],
  // plugins: [
  //   new InlineEnvironmentVariablesPlugin({token: 'token'})
  // ],
  //   plugins: [
  //     new webpack.DefinePlugin( {
  //       "process.env": dotenv
  //     } ),
  //     new UglifyJsPlugin({
  //       "uglifyOptions":
  //           {
  //               compress: {
  //                   warnings: false
  //               },
  //               sourceMap: true
  //           }
  //   }
  // ),
  //   ],
};
