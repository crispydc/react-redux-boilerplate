require('babel-polyfill'); //for Object.assign support
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//get NPM target
const TARGET = process.env.npm_lifecycle_event;

//make target available to babel
process.env.BABEL_ENV = TARGET;

//setup common paths
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
  hotStatic: '/static/'
};

//flag to determine dev or prod build status
const isDevBuild = (TARGET === 'start' || !TARGET);

//decide whether to use the react-hot loader or not
const jsxLoaders = isDevBuild ? ['react-hot', 'babel?cacheDirectory=babel-cache'] : ['babel?cacheDirectory=babel-cache'];

const common = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
   new ExtractTextPlugin('./appstyles.css', {
     allChunks: true,
     disable: isDevBuild
   })
  ],
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint-loader'],
        include: PATHS.app
      }
    ],
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', ['css-loader', 'postcss-loader','sass-loader'])
      },
      {
        // Set up jsx. This accepts js too thanks to RegExp
        test: /\.jsx?$/,

        // Enable caching for improved performance during development
        loaders: jsxLoaders,
        exclude: /(node_modules)/,
        include: PATHS.app
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(mp4|ogg|svg)$/,
        loader: 'file-loader'
      }
    ]
  }
};

// Default configuration. We will return this if
// Webpack is called outside of npm.
//DEVELOPMENT
if(isDevBuild) {
  common.plugins.push(new webpack.HotModuleReplacementPlugin());
  module.exports = Object.assign(common, {
    entry: [
      'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
      'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
      PATHS.app
    ],
    output: {
      path: PATHS.build,
      filename: 'bundle.js',
      publicPath: '/static/'
    },
    devtool: 'eval-source-map',
    devServer: {
      contentBase: PATHS.build,

      // Enable history API fallback so HTML5 History API based
      // routing works.
      historyApiFallback: true,
      hot: true,
      publicPath: PATHS.hotStatic,
      inline: true,
      progress: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env so this is easy to customize.
      host: process.env.HOST,
      port: process.env.PORT
    }
  });
}

//Running build target
//PRODUCTION
if(TARGET === 'build') {

  //set production environment
  common.plugins.push(new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }));

  //optimization plugins
  common.plugins.push(new webpack.optimize.UglifyJsPlugin());
  common.plugins.push(new webpack.optimize.DedupePlugin());

  module.exports = Object.assign(common, {
    entry: [
      PATHS.app
    ],
    output: {
      path: PATHS.build,
      filename: 'bundle.js'
    }
  });
}
