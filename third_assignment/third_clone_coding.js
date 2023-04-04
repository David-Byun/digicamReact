var express = require('express');
var app = express();
var path = require('path');

console.log(__dirname);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var ejs = require('ejs');
const { title } = require('process');
const { writer } = require('repl');

app.use(express.urlencoded({ extended: false }));
//body-parser

var guestbookList = [
  {
    id: 1,
    title: '제목1',
    writer: '작성자1',
    contents: '내용1',
    wdate: '2021-11-03',
  },
  {
    id: 2,
    title: '제목2',
    writer: '작성자2',
    contents: '내용2',
    wdate: '2021-11-04',
  },
  {
    id: 3,
    title: '제목3',
    writer: '작성자3',
    contents: '내용3',
    wdate: '2021-11-05',
  },
  {
    id: 4,
    title: '제목4',
    writer: '작성자4',
    contents: '내용4',
    wdate: '2021-11-03',
  },
  {
    id: 5,
    title: '제목5',
    writer: '작성자5',
    contents: '내용5',
    wdate: '2021-11-03',
  },
];

//use함수는 get, post 모두에 응한다. 현재 모든 url을 혼자처리함
app.get('/list', function (req, res) {
  res.render('guestbook/list', {
    title: '게시판목록',
    guestbookList: guestbookList,
  });
});

app.get('/view/:id', (req, res) => {
  var id = parseInt(req.params.id) - 1;
  //배열은 0부터 시작, id는 1부터 줬음
  res.render('guestbook/view', {
    title: '게시판상세화면',
    guestbook: guestbookList[id],
  });
});

//페이지만 이동한다. guestbook/write.ejs로 이동
app.get('/write', (request, response) => {
  response.render('guestbook/write.ejs');
});

app.post('/write', (req, res) => {
  console.log(req.body);
  var title = req.body.title;
  var writer = req.body.writer;
  var contents = req.body.contents;
  var wdate = req.body.wdate;
  var id = guestbookList.length + 1;

  guestbookList.push({
    title: title,
    contents: contents,
    writer: writer,
    wdate: wdate,
    id: id,
  });
  res.redirect('/list'); //글 작성 후 목록으로 이동한다
});

app.listen(4002, function () {
  console.log('Example app listening on port 4002!');
});
