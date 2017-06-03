var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Express server listening on port', port)
});