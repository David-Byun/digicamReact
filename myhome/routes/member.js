var express = require('express'); //node_modules 폴더에 있으면
var router = express.Router();
let commonDB = require('../commonDB');

/* GET home page */
router.get('/', function (req, res, next) {
  res.render('member/member_register', { title: 'Express' });
});

/* 
    아이디 중복 체크
    클라이언트로부터 아이디를 받는다. 받아온 아이디를 디비에 가서 존재하는지 유무 확인
    존재하면 fail 사용자에게 보내주고, 존재하지 않아서 사용가능하면 success 반환
*/

router.use('/idcheck', async function (req, res, next) {
  let userid = req.body.userid;
  let sql = `select count(*) cnt from tb_member where userid='${userid}'`;
  let rows = await commonDB.mysqlRead(sql);
  let cnt = rows[0]['cnt'];
  if (cnt == 0) {
    res.json({ result: 'success' });
  } else {
    res.json({ result: 'fail' });
  }
});

// /member/save
router.use('/save', async function (req, res, next) {
  let userid = req.body.userid;
  let password = req.body.password;
  let username = req.body.username;
  let email = req.body.email;
  let phone = req.body.phone;
  let zipcode = req.body.zipcode;
  let address1 = req.body.address1;
  let address2 = req.body.address2;
  let nickname = req.body.nickname;
  let sql = `
    insert into tb_member(userid, password, username, phone, email, nickname, zipcode, address1, address2, wdate)
    values(?,?,?,?,?,?,?,?,?,now()) 
  `;
  try {
    await commonDB.mysqlRead(sql, [
      userid,
      password,
      username,
      phone,
      email,
      nickname,
      zipcode,
      address1,
      address2,
    ]);
    res.redirect();
  } catch (e) {
    console.log(e);
    res.json({ result: 'fail' });
  }
});

router.get('/login', async function (req, res, next) {
  res.render('member/member_login');
});

router.get('/postcode', async function (req, res, next) {
  res.render('member/postcode');
});

router.post('/login', async function (req, res, next) {
  let userid = req.body.userid;
  let password = req.body.password;
  let sql = `select * from tb_member where userid='${userid}'`;
  let results = await commonDB.mysqlRead(sql);
  if (results.length == 0) {
    res.json({ result: 'fail', msg: '아이디가 없습니다.' });
    return;
  }
  if (results[0]['password'] != password) {
    res.json({ result: 'fail', msg: '패스워드가 일치하지 않습니다.' });
    return;
  }
  req.session['username'] = results[0]['username'];
  req.session['userid'] = results[0]['userid'];
  req.session['email'] = results[0]['email'];

  console.log(results[0]['username']);
  console.log(results[0]['userid']);
  console.log(results[0]['email']);

  res.json({ result: 'success', msg: '로그온 성공' });
});

router.get('/put', async function (req, res, next) {
  let userid = req.query.userid;
  req.session['userid'] = userid;
  console.log(req.session['userid']);
});

router.use('/logout', async function (req, res, next) {
  req.session.destroy();
  res.redirect('/'); //로그아웃하고 나면 index로 보냄
});

router.use('/login_confirm', async function (req, res, next) {
  let userid = req.body.userid;
  let password = req.body.password;
  let sql = `select count(*) cnt from tb_member where userid='${userid}' and password='${password}'`;
  try {
    await commonDB.mysqlRead(sql, []);
    console.log('로그인 성공');
    res.redirect('/board');
  } catch (e) {
    console.log(e);
    res.json({ result: '아이디 혹은 패스워드를 확인해주세요' });
  }
});

module.exports = router;
