//board.js에서 디비접근, member.js 디비접근 -- 디비에 데이터 읽고 쓰기 전문 코드

var mysql = require('mysql2');
const DBInfo = {
  connectLimit: 10,
  host: 'localhost',
  user: 'user01',
  password: 'tiger123',
  database: 'mynode',
  port: 3306,
};

let readPool = mysql.createPool(DBInfo);

async function mysqlRead(sql, params) {
  let promise = new Promise((resolve, reject) => {
    readPool.getConnection((err, conn) => {
      if (err) {
        console.log(err);
      }

      conn.query(sql, params, (err, rows) => {
        console.log(sql);
        console.log(rows);

        //rows가 뭐지?
        if (err) reject(err);
        else resolve(rows);

        conn.release(); //코드 해제
      });
    });
  });
  await promise;
  return promise;
}

exports.mysqlRead = mysqlRead;
