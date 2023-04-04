var express = require('express');
var app = express();
var fs = require('fs');
var ejs = require('ejs');

//ejs 엔진은 views 폴더 아래서 파일을 검색한다.
app.set('view engine', ejs);

app.use(express.urlencoded({ extended: false })); //body-parser 사용

let boardList = [
  { id: 1, title: '제목1', writer: '작성자1', wdate: '2023-04-01' },
  { id: 2, title: '제목2', writer: '작성자2', wdate: '2023-04-02' },
  { id: 3, title: '제목3', writer: '작성자3', wdate: '2023-04-03' },
  { id: 4, title: '제목4', writer: '작성자4', wdate: '2023-04-04' },
  { id: 5, title: '제목5', writer: '작성자5', wdate: '2023-04-05' },
];

app.use('/board/list', (request, response) => {
  response.render('board/board_list.ejs', { boardList: boardList });
});

//페이지만 이동한다. board_write.ejs로 이동
app.use('/board/write', (request, response) => {
  response.render('board/board_write.ejs');
});

//저장하기
app.use('/board/save', (request, response) => {
  let date = new Date();
  let title = request.body.title;
  let contents = request.body.contents;
  let writer = request.body.writer;
  let wdate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    '0'
  )}-${String(date.getDate()).padStart(2, '0')}`;
  console.log(wdate);
  let id = boardList.length + 1;
  boardList.push({
    id: id,
    title: title,
    contents: contents,
    writer: writer,
    wdate: wdate,
  });
  console.log(boardList);
  response.redirect('/board/list');
});

app.use('/board/view/:id', (req, res) => {
  let id = req.params.id;
  item = boardList.filter((x) => x.id == id);
  res.render('board/board_view.ejs', { item: item[0] });
});

app.listen(4003, () => {
  console.log('server start http://127.0.0.1:4003');
});
