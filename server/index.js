var express = require('express');
var bodyParser = require('body-parser');
var imageRouter = require('./routers/image.js');

var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.use('/api/image', imageRouter);

app.listen(8080, function() {
  console.log('listening on port 8080');
});