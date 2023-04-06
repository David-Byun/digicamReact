var mysql = require('mysql2');
var pool = mysql.createPool({
  connectionLimit: 10,
  host: '127.0.0.1',
  user: 'user01',
  password: 'tiger123',
  database: 'mynode',
  port: 3306,
});

//디비와 연결을 한다.
pool.getConnection((err, connection) => {
  //디비와 연결 성공하면 매개변수로 전달된 함수가 호출된다.
  //err - 디비와 연결실패시 처리
  if (err) {
    console.log(err);
    return;
  }
  //연결 성공시 연결객체 connection을 전달한다
  //연결객체
  console.log('connection suceess');

  new Promise((resolve, reject) => {
    sql =
      'insert into tb_board(title, writer, contents, wdate) values(?,?,?,now())';
    let params = ['제목2', '임꺽정', '내용2'];
    connection.query(sql, params, (err, rows) => {
      if (err) {
        reject('db 오류');
      } else {
        resolve('success'); //then 구문으로 이동한다
      }
    });
  })
    .then((result) => {
      sql = 'select * from tb_board';
      connection.query(sql, (err, rows) => {
        if (err) console.log('err');
        console.log(rows);
        //connection.release(); //연결해제
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
console.log('end');
//https://url.kr/p2zobs
