var http = require("http");
var fs = require('fs');
var port = 3000;
var serverUrl = "127.0.0.1";
var counter = 0;

var server = http.createServer(function(req, res) {

  

  res.send("index.html");

});

console.log("Starting web server at " + serverUrl + ":" + port);
server.listen(port, serverUrl);