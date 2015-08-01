var express = require('express');
var app = express();

var students = [
  { value : '0', name : "Adriano da Silva"},
  { value : '1', name : "Carlos Oliveira"},
  { value : '2', name : "Renata Silveira"},
  { value : '3', name : "Suzana Carvalho"}
];

app.get('/seat-map/api/student', function (req, res) {
  res.json(students);
});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('seat-map listening at http://%s:%s', host, port);
});