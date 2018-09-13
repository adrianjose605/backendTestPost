'use strict'
var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://postgres:postgres@localhost:5433/postTCIT");

module.exports = db;