const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'public/javascripts/build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {
  entry: [path.join(__dirname, '/public/javascripts/app.js')],
  // Render source-map file for final build
  devtool: 'source-map',
  // output config
  output: {
    path: buildPath, // Path of output file
    filename: 'app.js', // Name of output file
  },
  plugins: [
    // Define production build to allow React to strip out unnecessary checks
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    // Minify the bundle
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        // suppresses warnings, usually from module minification
        warnings: false,
      },
    }),
    // Allows error warnings but does not stop compiling.
    new webpack.NoErrorsPlugin()
    // Transfer Files
/*    new TransferWebpackPlugin([
      {from: 'www'},
    ], path.resolve(__dirname, 'src')),*/
  ],
  module: {
    loaders: [
      {
        test: /\.js$/, // All .js files
        loaders: ['babel-loader'], // react-hot is like browser sync and babel loads jsx and es6-7
        exclude: [nodeModulesPath],
      },
      {
          test: /\.css$/,
          loader: 'style-loader!css-loader',
          include: /flexboxgrid/
      }
    ],
  },
};

module.exports = config;
