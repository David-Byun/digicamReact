let express = require('express');
let router = express.Router();
let commonDB = require('../commonDB');

/* GET home page. */
router.get('/', async function (req, res, next) {
  let sql = `
        select id, title, writer, contents, date_format(wdate, '%Y-%m-%d') wdate
        from tb_board
        `;
  let results = await commonDB.mysqlRead(sql, []);
  res.render('board/board_list', { boardList: results });
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

router.post('/write', async function (req, res, next) {
  let writer = req.body.writer;
  let title = req.body.title;
  let contents = req.body.contents;
  var today = new Date();
  var year = today.getFullYear();
  var month = ('0' + (today.getMonth() + 1)).slice(-2);
  var day = ('0' + today.getDate()).slice(-2);

  var dateString = year + '-' + month + '-' + day;
  let sql = `
        insert into tb_board(title, writer, contents, wdate)
        values ("${title}", "${writer}", "${contents}", "${dateString}")
        `;
  await commonDB.mysqlRead(sql, []);
  res.redirect('/board');
});

module.exports = router;
