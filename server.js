'use strict';

const path = require('path');
const express = require('express');
const http = require('http');

const app = express();
const server = http.Server(app);

const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname)));
app.use("/css", express.static(__dirname));
app.use("/images", express.static(__dirname + '/images'));
app.use("/js", express.static(__dirname + '/js'));

// viewed at based directory http://localhost:8080/
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/`);
});