let express = require('express');
let router = express.Router();
let commonDB = require('../commonDB');

/* GET home page. */
router.get('/list', async function (req, res, next) {
  let sql = `
    select a.id, a.hero_name, a.hero_desc, date_format(a.wdate, '%Y-%m-%d') wdate
    from tb_hero a
    `;
  let results = await commonDB.mysqlRead(sql, []);
  console.log(results);
  res.json(results);

  /* res.json([
    { id: 1, name: '이순신', desc: '임진왜란' },
    { id: 2, name: '홍길동', desc: '형한테 형이라 부름' },
    { id: 3, name: '세종대왕', desc: '한글창제' },
    { id: 4, name: '을지문덕', desc: '살수대첩' },
    { id: 5, name: '문종', desc: '자격루' },
  ]); */
});

router.post('/write', async function (req, res, next) {
  try {
    let hero_name = req.body.hero_name;
    let hero_desc = req.body.hero_desc;
    sql = `
        insert into tb_hero(hero_name, hero_desc, wdate)
        values (?, ?, NOW());
        `;

    await commonDB.mysqlRead(sql, [hero_name, hero_desc]);
    res.json({ result: 'success' });
  } catch (e) {
    console.log(e);
    res.json({ result: 'fail' });
  }
});

router.get('/view/:id', async function (req, res, next) {
  try {
    let id = req.params.id;
    sql = `
        select id, hero_name, hero_desc
        from tb_hero where id = ${id}
        `;
    results = await commonDB.mysqlRead(sql, []);
    res.json({ results: 'success', hero: results[0] });
  } catch (e) {
    console.log(e);
    res.json({ result: 'fail' });
  }
});

router.post('/update', async function (req, res, next) {
  try {
    let id = req.body.id;
    let hero_name = req.body.hero_name;
    let hero_desc = req.body.hero_desc;
    sql = `
        update tb_hero set hero_name=?, hero_desc=? where id=?
        `;
    await commonDB.mysqlRead(sql, [hero_name, hero_desc, id]);
    res.json({ result: 'success' });
  } catch (e) {
    console.log(e);
    res.json({ result: 'fail' });
  }
});

module.exports = router;
