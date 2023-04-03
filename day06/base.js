let http = require('http');

let server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
  res.end('<H1>기본 서버입니다</H1>');
});

server.listen(4000, (req, res) => {
  console.log('server start http://127.0.0.1:4000');
});
