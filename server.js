var path = require('path');
var webpack = require('webpack');
var express = require('express');
var request = require('request');
var devMiddleware = require('webpack-dev-middleware');
var hotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

app.use(devMiddleware(compiler, {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
}));

app.use(hotMiddleware(compiler));

var CATS_URL = 'http://lorempixel.com/200/200/cats/';
var OMDB_URL = 'http://www.omdbapi.com/?';

app.get('/pic', function(req, res) {
  request.get({
    url: CATS_URL,
    encoding: null
  }, function(err, response, buffer) {
    res.set('Content-Type', response.headers['content-type']);
    res.end(buffer);
  });
});

app.get('/movies/:id', function (req, res) {
  request(OMDB_URL + 'i=' + req.params.id, function (err, response, buffer) {
    res.end(buffer);
  })
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, function (err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
});
