var express = require('express');
var app = express();

var seats = [
  { column : '1', row : '1', studentId: "01", name : "Jorge Pereira"},
  { column : '1', row : '2', studentId: "02", name : "Carlos Oliveira"},
  { column : '1', row : '3', studentId: "03", name : "Renata Silveira"},
  { column : '2', row : '1', studentId: "04", name : "Marcio Silva"},
  { column : '2', row : '2', studentId: "05", name : "Joaquim da Costa"},
  { column : '2', row : '3', studentId: "06", name : "Flavia Souza"},
  { column : '3', row : '1', studentId: "07", name : "Suzana Carvalho"},
  { column : '3', row : '2', studentId: "08", name : "Rosangela Pereira"},
  { column : '3', row : '3', studentId: "09", name : "Renata Luz"},
];

app.get('/seat-map/api/seat', function (req, res) {
  res.json(seats);
});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('seat-map listening at http://%s:%s', host, port);
});