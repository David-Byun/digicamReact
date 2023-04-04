var express = require('express');
var app = express(); // 서버 만들었음
var fs = require('fs');
var ejs = require('ejs');

//bodyParse -- npm install bodyParser
//새버전에서는 express가 갖고 있다.
//post로 전송할때 request.body에 보낸 정보를 추가해서 사용이 간편하도록 도와주는 미들웨어
app.use(express.urlencoded({ extended: false }));

app.get('/guguform', (req, res) => {
  fs.readFile('guguform.html', 'utf-8', (err, data) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(ejs.render(data));
  });
});

app.get('/gugu', (req, res) => {
  let dan = parseInt(req.query.dan);
  let result = '';
  for (i = 1; i < 10; i++) {
    result += `<p style="color:blue;font-size:14pt">${dan} * ${i} = ${
      dan * i
    }</p> <br />`;
  }
  res.writeHead(200, { 'Content-type': 'text/html' });
  res.end(result);
});

app.get('/calform', (req, res) => {
  fs.readFile('calcform.html', 'utf-8', (err, data) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(ejs.render(data));
  });
});

app.get('/calc', (req, res) => {
  let x = parseInt(req.query.x); //input태그 name속성
  let y = parseInt(req.query.y);
  let operator = req.query.operator;
  if (operator == '1') {
    res.send(`${x} + ${y} = ${x + y}`);
  } else if (operator == '2') {
    res.send(`${x} - ${y} = ${x - y}`);
  } else if (operator == '3') {
    res.send(`${x} * ${y} = ${x * y}`);
  } else res.send(`${x} / ${y} = ${x / y}`);
});

app.get('/input', (req, res) => {
  fs.readFile('input.html', 'utf-8', (err, data) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(ejs.render(data));
  });
});

app.get('/login', (req, res) => {
  let userid = req.query.userid; //input태그의 name속성(서버하고는 name과 연결)
  let password = req.query.password;

  if (userid == 'test' && password == '1234') {
    res.send('login success');
  } else {
    //send 함수로 보낼때는 header 사용 필요 없음
    res.send('login fail');
  }
});

app.listen(4000, () => {
  console.log('server start http://127.0.0.1:4000');
});
