let http = require('http');
let fs = require('fs');

let server = http.createServer((req, res) => {
  fs.readFile('index.html', (error, data) => {
    if (error) {
      res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
      res.end('error');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    res.end(data); //파일 내용을 브라우저로 보낸다.
  });
});

server.listen(4000, (req, res) => {
  console.log('server start http://127.0.0.1:4000');
});
