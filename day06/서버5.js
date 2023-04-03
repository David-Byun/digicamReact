let http = require('http');
const { URLSearchParams } = require('url');

let server = http.createServer((req, res) => {
  if (req.method == 'POST') {
    //header 가 먼저 가고 body가 간다
    //body에서 오는 정보 수신하기
    let body = '';
    req.on('data', (data) => {
      body += data;
      //body를 타고 오는 데이터를 계속 받는다.
    });

    //데이터 수신이 종료하면
    req.on('end', () => {
      //body변수에 그동한 수신한 데이터가 있다(url에 내용 붙여도 안감)
      let postData = new URLSearchParams(body);

      let name = postData.get('name');
      let age = postData.get('age');
      let temp = `<h1>post</h1><h3>${name} ${age}</h3>`;
      res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
      res.end(temp);
    });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    res.end('<H1>GET</H1>');
  }
});

server.listen(4000, (req, res) => {
  console.log('server start http://127.0.0.1:4000');
});
