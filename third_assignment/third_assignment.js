var express = require('express');
var app = express();
var fs = require('fs');
var ejs = require('ejs');

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  fs.readFile('index.html', 'utf-8', (err, data) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(ejs.render(data));
  });
});

app.get('/dan', (req, res) => {
  let name = req.query.name;
  let kor = parseInt(req.query.kor);
  let en = parseInt(req.query.en);
  let math = parseInt(req.query.math);
  let sum = kor + en + math;
  let avg = sum / 3;

  let result = `<h1>${name}의 총점은 ${sum}이고 평균은 ${avg}입니다.</h1>`;
  res.writeHead(200, { 'Content-type': 'text/html;charset=utf-8' });
  res.end(result);
});

app.listen(4001, () => {
  console.log('server start http://127.0.0.1:4001');
});
