let express = require('express');
let router = express.Router();
let commonDB = require('../commonDB');
let commonUtil = require('./commonUtil');

/* GET home page. */
router.get('/list/:pg', async function (req, res, next) {
  let pg = parseInt(req.params.pg);
  //pg=1 0 pg=2 10 pg=3 20 pg=4 30
  //전체 데이터 개수 확인
  let sql = `
        select count(*) cnt
        from tb_board A 
        left outer join (select @rownum:=0) B on 1=1 
        left outer join tb_member c on a.writer = c.userid 
        `;
  let results = await commonDB.mysqlRead(sql, []);
  console.log(`cnt = ${results[0]['cnt']}`);
  let totalCnt = results[0]['cnt'];
  sql = `
        select a.id, a.title, a.writer, a.username, a.num
        , date_format(a.wdate, '%Y-%m-%d') wdate 
        from   
        (select a.id, a.title, a.writer, a.wdate, c.username, @rownum:=@rownum+1 num 
          from tb_board A 
          left join (select @rownum:=0) B on 1=1 
          left join tb_member c on a.writer = c.userid 
          order by id desc) A 
          limit ${(pg - 1) * 10},10;
        `;

  results = await commonDB.mysqlRead(sql, []);
  res.render('board/board_list', {
    session: req.session,
    boardList: results,
    totalCnt: totalCnt,
    paging: commonUtil.getPaging(pg, totalCnt),
    pg: pg,
  });
});

router.get('/view/:id', async function (req, res, next) {
  let id = req.params.id;
  let sql = `
        select id, title, writer, contents, date_format(wdate, '%Y-%m-%d') wdate
        from tb_board where id = ${id}
        `;
  let results = await commonDB.mysqlRead(sql, []);
  res.render('board/board_view', { board: results });
});

router.get('/write', function (req, res, next) {
  res.render('board/board_write');
});

router.post('/view/write', async function (req, res, next) {
  let name = req.body.name;
  let title = req.body.title;
  let contents = req.body.contents;
  let sql = `
        insert into tb_board(title, writer, contents, wdate)
        values (${title}, ${name}, ${contents}, now())
        `;
  let results = await commonDB.mysqlRead(sql, []);
  res.render('board/board_view', { board: results });
});

module.exports = router;
