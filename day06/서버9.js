let http = require('http');
let fs = require('fs');
let jade = require('jade');

let server = http.createServer((req, res) => {
  fs.readFile('test.jade', 'utf-8', (error, data) => {
    let fn = jade.compile(data);
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    res.end(fn({ name: 'jade' }));
  });
});

server.listen(4000, (req, res) => {
  console.log('server start http://127.0.0.1:4000');
});
