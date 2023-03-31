let http = require('http');
let fs = require('fs'); // 파일 읽기
let url = require('url'); //url분석을 위한 라이블러

//http://127.0.01:3000?name=Tom&age=17

let server = http.createServer((req, res) => {
  //console.log(request)
  console.log(req.url);
  console.log(req.method);

  let rurl = req.url;
  let query = url.parse(rurl, true).query;
  //string 분석 -> json 객체로 전환 파싱한다.

  console.log(query);
  console.log(rurl);

  if (query.name != '') {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    res.end(`이름 : ${query.name} 나이 : ${query.age}`);
  }
});

server.listen(3000, (req, res) => {
  console.log('server start http://127.0.0.1:3000');
});

/*
  통신을 하려면 ip, mac address, port 가 필요
  mac address : 랜카드 주소, 이더넷 주소 : 각자의 랜카드에는 16진수 쌍으로 이루어진 전세계에서 유일한 값이 저장되어 있다

  ip : www.daum.net(도메인 이름) -> DNS서버(도메인 네임 서버) ip를 알아온다

  ip는 통신을 하고자 하는 상대방의 단말장치(컴퓨터등)
  상대방의 단말장치에 가서 만나야할 프로세스가 누구냐(포트번호)

  소켓 통신을 할때 LAN 카드 내부구조
*/
