let fs = require('fs');

fs.readFile('./hello.js', 'utf-8', (err, data) => {
  // 이 함수는 파일을 모두 읽은 후 시스템에 의해 호출된다.
  console.log(data);
});

console.log('프로그램 완료');
