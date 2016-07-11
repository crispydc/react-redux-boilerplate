require('babel-polyfill'); //for Object.assign support
const webpack = require('webpack');
const path = require('path');

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

const common = {
  // Entry accepts a path or an object of entries. We'll be using the
  // latter form given it's convenient with more complex configurations.
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    PATHS.app
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
    publicPath: '/static/'
  },
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
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: PATHS.app
      },
      {
        // Set up jsx. This accepts js too thanks to RegExp
        test: /\.jsx?$/,

        // Enable caching for improved performance during development
        loaders: ['react-hot', 'babel?cacheDirectory'],
        include: PATHS.app
      }
    ]
  }
};

// Default configuration. We will return this if
// Webpack is called outside of npm.
//DEVELOPMENT
if(TARGET === 'start' || !TARGET) {
  module.exports = Object.assign(common, {
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
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}

//Running build target
//PRODUCTION
if(TARGET === 'build') {
  module.exports = Object.assign(common, {});
}
