const path = require("path");
const webpack = require("webpack");
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const dotenv = require('dotenv').config( {
  path: path.join(__dirname, '.env')
} );


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
            'token': process.env.NODE_ENV === "development" ? "98d361c45bb1b0030dbe42684a781edc618f18ed": JSON.stringify(process.env.token)
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
