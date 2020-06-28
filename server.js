var express = require("express");
var app = express();
var path = require("path");

app.get('/', function (req, res) {
  app.use(express.static(__dirname + '/'));
  res.sendFile(path.join(__dirname + '/rhythm.html'));
  //__dirname : It will resolve to your project folder.
});

app.listen(process.env.PORT || 7777);
