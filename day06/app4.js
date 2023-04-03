var express = require('express');
var app = express(); //서버
var ejs = require('ejs');
var fs = require('fs');

//app.set('view engine', ejs); //내부변수에 값을 설정한다
//미들웨어를 사용한다
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  fs.readFile('index.html', 'utf-8', (err, data) => {
    res.send(data.toString());
  });
});

app.use((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<H1>Express</H1>');
});

app.listen(4002, (req, res) => {
  console.log('server start http://127.0.0.1:4002');
});
