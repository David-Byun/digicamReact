var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ajaxtest1', function (req, res, next) {
  res.render('ajax/ajaxtest1');
});

router.get('/ajaxtest2', function (req, res, next) {
  res.render('ajax/ajaxtest2');
});

router.get('/ajaxtest3', function (req, res, next) {
  res.render('ajax/ajaxtest3');
});

//send 함수가 적당히 알아서 데이터 보낸다
//http://127.0.0.1:3000
router.get('/add', function (req, res, next) {
  x = parseInt(req.query.x);
  y = parseInt(req.query.y);
  z = x + y;
  res.json({ result: z });
});

router.get('/cal', function (req, res, next) {
  ko = parseInt(req.query.ko);
  en = parseInt(req.query.en);
  ma = parseInt(req.query.ma);
  let result = [];

  sum = ko + en + ma;
  avg = (ko + en + ma) / 3;
  result.push(sum);
  result.push(avg);
  console.log(sum, avg);
  res.json({ result: result });
});

module.exports = router;
