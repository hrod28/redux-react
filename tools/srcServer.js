'use strict';

import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

const port = 3000;
const app = express();//create instance of express
const compiler = webpack(config);//then call webpack as defined earlier

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));


//now to configure express
app.use(require('webpack-dev-middleware')(compiler, {//we use middleware and pass it compiled web configuration
  noInfo: true,//declaring that we do not want files printed on the command line
    publicPath: config.output.publicPath//pass it publicPath that we defined within the config file
}));

app.use(require('webpack-hot-middleware')(compiler));//same as line 15, but for productin not dev

//we tell express which files we want to serve and for a SPA, we want express to serve index.html
//for all requests so the wildcard ('*') will end up returning index.html
app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

//this is where we start express
app.listen(port, function(err){
  if (err) {
      console.log(err);
  }
  else {
      open(`http://localhost:${port}`);//this line's purpose is to use the open package to open browser
  }
});
