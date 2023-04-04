var express = require('express');
var app = express(); //서버

//첫번째 미들웨어
app.use((req, res, next) => {
  //request 브라우저 -> 서버
  //response 서버 -> 브라우저
  //next -> 다음 함수를 호출한다
  req.name = '홍길동';
  res.name = 'John';
  console.log('aaaaaa');
  next();
});

app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-type': 'text/html' });
  console.log(req.name);
  console.log(res.name);

  res.end(`<H1>${req.name}</H1>`);
});

app.listen(4000, () => {
  console.log('server start http://127.0.0.1:4000');
});
