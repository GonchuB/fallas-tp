// The main application script, ties everything together.

var express = require('express');
var app = module.exports = express();

app.use(express.static(__dirname + '/dist'));

var serverPort = process.env.PORT || 4000;
console.log('Server running on port: ' + serverPort);
app.listen(serverPort);