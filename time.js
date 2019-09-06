var express = require('express');
var app = express();

var requestTime = function (req, res, next) {
  req.requestTime = Date(Date.now());
  next();
                                            };
app.use(requestTime);

app.get('/', function (req, res) {
  res.send( '<h1> Hello World! </h1>'+ '<br>' + req.requestTime );
});

app.listen(3000);