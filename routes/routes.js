'use strict'

var express = require('express');
var PostController = require('../controllers/post');

var api = express.Router();

api.get('/post', PostController.getPost);
api.post('/post', PostController.insertPost);
api.put('/post', PostController.updatePost);
api.delete('/post/:id', PostController.deletePost);



module.exports = api;