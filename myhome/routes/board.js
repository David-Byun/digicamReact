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

router.post('/view/write', async function (req, res, next) {
  let name = req.body.name;
  let title = req.body.title;
  let contents = req.body.contents;
  let sql = `
        insert into tb_board(title, writer, contents, wdate)
        values (${title}, ${name}, ${contents}, now())
        `;
  let results = await commonDB.mysqlRead(sql, []);
  console.log(results);
  res.render('board/board_view', { board: results });
});

module.exports = router;
