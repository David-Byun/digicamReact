var express = require('express');
var app = express();

app.get('/calc', (res, req) => {});

app.use((request, response) => {
  response.writeHead(200, { 'Content-type': 'text/html' });
  response.end('<H1>Express</H1>');
});

app.listen(4000, () => {
  console.log('server start http://127.0.0.1:4000');
});
