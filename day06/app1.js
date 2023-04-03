var express = require('express');
var app = express(); //서버 만들었음

//express 모듈자체가 use,get,post 함수 3개가 있음
//use - get, post가 오면
//get - get방식으로 온것만
//post - post방식으로 온것만
app.use('/test', (req, res) => {
  res.writeHead(200, { 'Content-type': 'text/html' });
  res.end('<h1>Test</h1>');
});

app.get('/get', (req, res) => {
  res.writeHead(200, { 'Content-type': 'text/html' });
  res.end('<h1>GET</h1>');
});

app.get('/userinfo', (req, res) => {
  let userinfo = { name: 'Tom', phone: '010-0000-0000' };
  res.send(userinfo); //send함수 이용해서 JSON 데이터 송신
});

app.get('/userinfo2', (req, res) => {
  //req.params.name;
  let userinfo = { name: req.query.name, phone: req.query.phone };
  res.send(userinfo); //send함수 이용해서 JSON 데이터 송신
});

//get 방식 - 새롭게 추가된 url 방식
app.get('/userinfo3/:username/:userid', (req, res) => {
  console.log(req.params);
  let userinfo = {
    name: req.params.username,
    phone: req.params.userid,
  };
  res.send(userinfo);
});

app.post('/post', (req, res) => {
  res.writeHead(200, { 'Content-type': 'text/html' });
  res.end('<h1>POST</h1>');
});
//다른 url 처리 없을 때 처리한다.

app.use((req, res) => {
  res.writeHead(200, { 'Content-type': 'text/html' });
  res.end('<h1>Express</h1>');
});

app.listen(4000, () => {
  console.log('server start http://127.0.0.1:4000');
});
