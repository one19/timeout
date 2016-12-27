const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const postcssUnits = require('postcss-units');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const {
  NODE_ENV = 'development',
  PORT = 9001
} = process.env;

const styleLoader = ['css-loader?',
  'camelCase&modules&importLoaders=1&',
  'localIdentName=[name]__[local]___[hash:base64:5]',
  '!postcss-loader'].join('');

const config = {
  context: `${__dirname}/app`,
  entry: [
    './index.js' // Your appʼs entry point
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader?cacheDirectory']
      },
      {
        test: /fonts\/.*?\.(eot|svg|ttf|woff|woff2)$/,
        exclude: /node_modules/,
        loader: 'file?name=fonts/[name].[ext]'
      },
      {
        test: /fonts\/.*?\.(eot|svg|ttf|woff|woff2)$/,
        exclude: /node_modules/,
        loader: 'file?name=fonts/[name].[ext]'
      }
    ]
  },
  postcss: [
    autoprefixer,
    postcssUnits
  ],
  plugins: [
    new FaviconsWebpackPlugin('./images/timeout1.png'),
    new HtmlWebpackPlugin({
      inject: false,
      template: './index.html'
    })
  ]
};

if (NODE_ENV === 'development') {
  config.entry.push(`webpack-dev-server/client?http://0.0.0.0:${PORT}`, // WebpackDevServer host and port
    'webpack/hot/only-dev-server'); // "only" prevents reload on syntax errors)
  config.module.loaders.push(
    { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader'] },
    { test: /\.css$/, loader: `style-loader!${styleLoader}` }
  );
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  );
} else {
  config.module.loaders.push(
    { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
    { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', styleLoader) }
  );
  config.plugins.push(
    new ExtractTextPlugin('app.css', { allChunks: true }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: { warnings: false },
      mangle: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  );
}

module.exports = config;
