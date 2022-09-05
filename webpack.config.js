let path = require('path');
let BundleTracker = require('webpack-bundle-tracker');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
let pathsToClean = ['./static/bundles/*.*'];
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  context: __dirname,
  entry: {
    sidebar: './static/webpack_index/sidebar.js',
    home: './static/webpack_index/home.js',
    my_specials: './static/webpack_index/my_specials.js',
    calendar: './static/webpack_index/calendar.js',
    library: './static/webpack_index/library.js',
    add_comedian: './static/webpack_index/add_comedian.js',
    search: './static/webpack_index/search.js',
    comedians: './static/webpack_index/comedians.js',
    specials: './static/webpack_index/specials.js',
    profile: './static/webpack_index/profile.js',
    corporate_pages: './static/webpack_index/corporate_pages.js',
  },
  output: {
    path: path.resolve(__dirname, './static/bundles'), // Should be in STATICFILES_DIRS
    publicPath: '/static/', // Should match Django STATIC_URL
    filename: '[name].js', // No filename hashing, Django takes care of this
    chunkFilename: '[id]-[chunkhash].js' // DO have Webpack hash chunk filename
  },

  plugins: [
    new CleanWebpackPlugin({cleanAfterEveryBuildPatterns: pathsToClean}),
    new BundleTracker({filename: './webpack-stats.json'}),
    // new BundleAnalyzerPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, // to transform JSX into JS
      {
        test: /\.css$/,
        use: [{loader: 'style-loader'}, {loader: 'css-loader'}]
      },
      // {
      //   test: /\.(woff|woff2|ttf|eot|svg)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
      //   loader: 'url-loader?limit=100000'
      // },
      // {
      //   test: /\.(?:png|jpe?g|svg)$/,
      //   loader: 'url-loader'
      // }
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   loader: 'file-loader'
      // }
    ]
  },

  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'static'), path.resolve(__dirname, 'templates')],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      static: path.resolve(__dirname, 'static'),
      templates: path.resolve(__dirname, 'templates'),
      home: path.resolve(__dirname, 'home'),
      my_specials: path.resolve(__dirname, 'my_specials'),
      calendar: path.resolve(__dirname, 'calendar'),
      library: path.resolve(__dirname, 'library'),
      search: path.resolve(__dirname, 'search'),
      comedians: path.resolve(__dirname, 'comedians'),
      specials: path.resolve(__dirname, 'specials'),
      profile: path.resolve(__dirname, 'profile'),
      corporate_pages: path.resolve(__dirname, 'corporate_pages'),
    },
  },

  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
  },
};
