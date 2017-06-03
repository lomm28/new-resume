/*var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Express server listening on port', port)
});*/

'use strict';

const path = require('path');
const express = require('express');
const http = require('http');

const app = express();
const server = http.Server(app);

const port = process.env.PORT || 8080;

app.use('/', express.static(path.join(__dirname, 'testheroku')));
app.use('/images',express.static(path.join(__dirname, 'public/images')));
app.use('/js',express.static(path.join(__dirname, 'public/javascripts')));
app.use('/css',express.static(path.join(__dirname, 'public/stylesheets')));

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/`);
});