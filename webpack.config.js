var webpack = require('webpack');
module.exports = {
  devtool: 'source-maps',
  entry: "./app/home.js",
  output: {
    filename: "./public/bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'jsx-loader'}
    ]
  }
};

/*
plugins: [
  	new webpack.DefinePlugin({
  		'process.env.NODE_ENV' : JSON.stringify(process.env.NODE_ENV)
  	}),
  	new webpack.optimize.CommonsChunkPlugin('./public/common.js'),
  	new webpack.optimize.UglifyJsPlugin()
  ],
  */