'use strict'

var app = require('./app');
var port = process.env.PORT || 9000;
var db = require('./conection');

app.listen(port, () => {
  console.log('server ready, port:' + port);
  if (db)
    console.log('BDD connection successful');
});