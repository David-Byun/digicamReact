var express = require('express');
var app = express(); //서버

app.get('/add', (req, res) => {
  x = req.query.x;
  y = req.query.y;
  z = parseInt(x) + parseInt(y);
  res.send({ x: x, y: y, z: z });
});

app.get('/add/:x/:y', (req, res) => {
  x = req.params.x;
  y = req.params.y;
  z = parseInt(x) + parseInt(y);
  res.send({ x: x, y: y, z: z });
});

app.use((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<H1>Express</H1>');
});

app.listen(4000, (req, res) => {
  console.log('server start http://127.0.0.1:4000');
});
