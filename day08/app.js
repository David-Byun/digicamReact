var express = require('express');
var app = express(); // 서버 만들었음
var ejs = require('ejs');
var cors = require('cors');
app.use(cors());
app.set('view engine', ejs);

app.get('/score/list');

app.use(express.urlencoded({ extended: false }));
app.use((request, response) => {
  response.writeHead(200, { 'Content-type': 'text/html' });
  response.end('<H1>Express</H1>');
});

app.listen(4000, () => {
  console.log('server start http://127.0.0.1:4000');
});
