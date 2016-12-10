var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Timer: 'app/components/timer.jsx',
      Countdown: 'app/components/countdown.jsx',
      CountdownForm: 'app/components/countdownform.jsx',
      Clock: 'app/components/clock.jsx',
      Controls: 'app/components/controls.jsx',
      Navigation: 'app/components/Navigation.jsx',
      applicationStyles: 'app/styles/app.scss'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
