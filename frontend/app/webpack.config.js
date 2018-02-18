const webpack = require('webpack');
const path = require('path');

module.exports = {
  watchOptions: {
    poll: true
  },
  entry: __dirname + '/src/index.js',
  output: {
    path: '/opt/bin/',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader',
        options: {
          limit: 25000,
        },
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve('./src/js'),
      path.resolve('./src/css'),
      path.resolve('./src/img'),
      path.resolve('./node_modules')
    ]
  }
};
