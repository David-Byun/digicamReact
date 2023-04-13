let express = require('express');
let router = express.Router();
let commonDB = require('../commonDB');
let commonUtil = require('./commonUtil');

router.get('/', async function (req, res, next) {
  let sql = `
    select student_id, student, kor, eng, math from score
  `;
  let results = await commonDB.mysqlRead(sql, []);
  res.status(200).json(results);
});
module.exports = router;
