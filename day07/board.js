var express = require('express');
var app = express();
var fs = require('fs');
var ejs = require('ejs');

//ejs 엔진은 views 폴더 아래서 파일을 검색한다.
app.set('view engine', ejs);

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

app.listen(4000, () => {
  console.log('server start http://127.0.0.1:4000');
});
