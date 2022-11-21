const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/static/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);