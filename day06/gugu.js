var express = require('express');
var app = express(); //서버

app.get('/gugu', (req, res) => {
  let dan = parseInt(req.query.dan);
  let data = [];
  for (i = 1; i < 10; i++) {
    data.push(`${dan} * ${i} = ${dan * i}`);
  }
  res.send(data);
});

app.listen(4001, (req, res) => {
  console.log('server start http://127.0.0.1:4001');
});

//get 방식의 경우 ?x=4&y=5 request.query.x
//get 방식의 경우 /4/5 request.params.x
//post 방식의 경우 app.use(express.urlencoded({ extended: false })) 먼저 선언되어야 한다.
//가 선행되고 나면 request.body.x로 처리한다.
