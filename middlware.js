var express = require('express');
var app = express();

var holaget = function (req, res, next) {
  console.log('hola get');
  app.get('/hola', function (req, res) {
  res.send('<h1>Hello World GET!!!!!!</h1>');
                                        });
  next();
                                         };

var holapost = function (req, res, next) {
  console.log('hola post');
  app.post('/hola', function (req, res) {
  res.send('<h3>Hello World POST!</h3>');
                                        });
  next();
                                         };  

var holadelete = function (req, res, next) {
  console.log('hola delete');
  app.delete ('/hola', function(req,res){
  res.send('<h3>Hello World DELETE!</h3>');
                                        });
  next();
                                          };

app.use(holaget);
app.use(holapost);
app.use(holadelete);
app.listen(3000);