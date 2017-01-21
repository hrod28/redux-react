import webpack from 'webpack';
import path from 'path';
//pulling in webpack and path and is defining an object literal from line 4 to 36

export default {
  debug: true,//sets the debug tool
  devtool: 'cheap-module-eval-source-map',//sets the devtool, you can choose any that you like
  noInfo: false,//false means the webpack will list all the files that it is bundling(off during real development)
  entry: [//define entry points and is a good place to inject middleware such as hot reloading
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    './src/index'
  ],
  target: 'web',//this tells webpack to bundle for use on browser, but you can do it for node for back end dev.
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src'//this tells webpack dev server where our code is: src folder
  },
  plugins: [//defining plugins, which give webpack more power
    new webpack.HotModuleReplacementPlugin(),//enable us to replace modules without refresh
    new webpack.NoErrorsPlugin()//keeps errors from breaking our hot loading experience
  ],
  module: {//tell webpack the types of files that we want it to handle:
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},//here: javascript and babel to transpile
      {test: /(\.css)$/, loaders: ['style', 'css']},//you can also declare less and sass or any other files
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},//this and the following are necessary for bootstrap to run
      {test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}
    ]
  }
};
