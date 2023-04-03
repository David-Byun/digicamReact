var express = require('express');
var app = express(); //서버

//bodyParser 모듈이 있는데 모듈을 설치하고 => express 자체적
//body에 데이터를 가져온다
app.use(express.urlencoded({ extended: false }));
//미들웨어, app 객체 만들고 다른 url처리전에만 호출되면 된다.

app.post('/add', (req, res) => {
  let x = req.body.x;
  let y = req.body.y;
  let z = parseInt(x) + parseInt(y);

  res.send({ x: x, y: y, z: z });
});

app.listen(4002, (req, res) => {
  console.log('server start http://127.0.0.1:4002');
});

//get 방식의 경우 ?x=4&y=5 request.query.x
//get 방식의 경우 /4/5 request.params.x
//post 방식의 경우 app.use(express.urlencoded({ extended: false })) 먼저 선언되어야 한다.
//가 선행되고 나면 request.body.x로 처리한다.
