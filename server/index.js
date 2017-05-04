var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

// app.use('/api/characters', characterRouter);

app.listen(8080, function() {
  console.log('listening on port 8080');
});