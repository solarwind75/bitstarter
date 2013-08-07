var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

var buffer  = new Buffer(fs.readFileSync('index.html'));

app.get('/', function(request, response) {
//  response.send('Hello World 3!');
  response.send(buffer.toString());
//  console.log(buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
