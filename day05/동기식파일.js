var fs = require('fs');

//require 외부 모듈을 안으로 불러온다
//List<String> list;
//java.util.List<String> list

//동기모드 함수는 반환값에 파일의 내용이 온다
var data = fs.readFileSync('./hello.js', 'utf-8');
console.log(data);
console.log('프로그램 종료');
