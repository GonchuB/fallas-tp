// The main application script, ties everything together.

var express = require('express');
var app = module.exports = express();

app.use(express.static(__dirname + '/dist'));

app.listen(3000);
console.log("Express server listening on port %d", 3000);