/* eslint-disable */
const webpack = require('webpack');
/* eslint-enable */

const nodeEnv = process.env.NODE_ENV || 'production';

module.exports = {
  devtool: 'source-map',
  entry: {
    filename: './client/app.js',
  },
  output: {
    // filename: '../_build/bundle.js',
    filename: './client/bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015-native-modules'],
          plugins: ['react-html-attrs', 'transform-class-properties'],
        },
      },
    ],
  },
  plugins: [
    // uglify js
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      sourceMap: true,
    }),

    // env plugin
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) },
    }),
  ],
};
