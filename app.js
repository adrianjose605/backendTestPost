'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var routes = require('./routes/routes');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    } else {
        next();
    }
});

//rutas base
app.use('/api', routes);

module.exports = app;