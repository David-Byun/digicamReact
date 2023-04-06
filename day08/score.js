var express = require('express');
var app = express(); // 서버 만들었음
var ejs = require('ejs');
app.set('view engine', ejs);
app.use(express.urlencoded({ extended: false }));

let scoreData = [
  {
    id: 1,
    name: '홍길동',
    kor: 90,
    eng: 80,
    mat: 100,
  },
]; // 데이터로 사용한다, url은 서버 전체에서 유일 score/list

//url은 서버 전체에서 유일 score/list
app.get('/score/list', (req, res) => {
  //views/score/score_list.ejs
  //express framework가 디자인파일들은 views 폴더 놓기로 약속
  //response 객체에 render라는 함수를 express가 추가
  //첫번째 매개변수 : html파일
  //두번째 매개변수 : 데이터를 json 형태로 전달해야 한다
  //이 두개를 합해서 새로운 문서를 만들어 클라이언트로 전송한다.
  res.render('score/score_list.ejs', { scoreList: scoreData });
});

app.get('/score/view/:id', (req, res) => {
  let id = req.params.id;
  //filter : 조건을 만족하는 모든 데이터셋(배열), find는 조건을 만족하는 첫번째 데이터만(배열 아님)
  let scoreItem = scoreData.find((score) => score.id == id);
  res.render('score/score_view.ejs', { score: scoreItem });
});

app.get('/score/write', (req, res) => {
  res.render('score/score_write.ejs');
});

app.post('/score/save', (req, res) => {
  let name = req.body.name;
  let kor = parseInt(req.body.kor);
  let eng = parseInt(req.body.eng);
  let mat = parseInt(req.body.mat);
  let id = 0; //젤 마지막에 있는 데이터의 id + 1을 해야한다
  id = scoreData[scoreData.length - 1].id + 1;
  data = { id: id, name: name, kor: kor, eng: eng, mat: mat };
  scoreData.push(data);
  //redirect 함수를 호출해서 /score/list 를 호출해야 한다.
  res.redirect('/score/list');
});

app.use('/', (request, response) => {
  response.render('index.ejs');
});

app.use((request, response) => {
  response.writeHead(200, { 'Content-type': 'text/html' });
  response.end('<H1>404 Error</H1>');
});

app.listen(4000, () => {
  console.log('server start http://127.0.0.1:4000');
});
