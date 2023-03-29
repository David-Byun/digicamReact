let add = (x, y) => x + y; //화살표 함수, return {} 생략 가능

let sigma = (limit) => {
  sum = 1;
  for (i = 1; i <= limit; i++) {
    sum += i;
  }
  return sum;
};

let arr = [1, 2, 4, 7, 9, 12, 24, 35, 27, 6];
let odd = [];
let even = [];

for (i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    even.push(arr[i]);
  } else {
    odd.push(arr[i]);
  }
}

//배열에 filter 함수 - 조건을 주면 조건에 맞는 데이터만 배열로 만들어서 변환
//filter - 매개변수가 하나, 반환값이 true 또는 false 결과값이 true인 것만 묶어서 준다.
//값 받아서 짝수면 true, 홀수면 false를 반환하는 함수

function isEven(e) {
  return e % 2 == 0;
}

even = arr.filter(isEven);

odd = arr.filter((e) => {
  e % 2 == 1;
});

let result = arr.filter((x) => x > 10);

words = [
  'school',
  'survey',
  'assembly',
  'desk',
  'pen',
  'pc',
  'os',
  'linux',
  'windows',
];

arr2 = arr.map((x) => x + 10);

arr3 = arr.filter((x) => x % 2 == 0).map((x) => x + 10);

console.log(arr3);

//홀수에 10 곱해서 출력하기
arr
  .filter((x) => x % 2 == 1) //중간연산 - 배열을 반환한다
  .map((x) => x * 10)
  .forEach((x) => console.log(x)); //최종연산

//단어 5글자 이상 찾아서 대문자로 만들어서 출력
words
  .filter((x) => x.length >= 5)
  .map((x) => x.toUpperCase())
  .forEach((x) => console.log(x));

let person = [
  { name: '홍길동', age: 11, phone: '010-0000-0001' },
  { name: '임꺽정', age: 13, phone: '010-0000-0002' },
  { name: '장길산', age: 12, phone: '010-0000-0003' },
  { name: '이순신', age: 14, phone: '010-0000-0004' },
  { name: '강감찬', age: 15, phone: '010-0000-0005' },
  { name: '우아아', age: 16, phone: '010-0000-0006' },
  { name: '아아이', age: 17, phone: '010-0000-0007' },
  { name: '어어어', age: 18, phone: '010-0000-0008' },
  { name: '윤어', age: 18, phone: '010-0000-0008' },
];

person.push({ name: '김성훈', age: 43, phone: '010-2324-2424' });

/* 
person.forEach((p) => {
  console.log(`${p.name} ${p.age} ${p.phone}`);
});
*/

//문제1. 성이 윤씨인 사람 찾아내기

result = person.filter((p) => p.name.startsWith('윤'));
console.log(result);

ageless19 = person.filter((p) => p.age <= 19); // 미성년
agege19 = person.filter((p) => p.age > 19); // 성년

console.log(ageless19);
console.log(agege19);

//정렬 - 데이터를 순서대로 늘어 놓는다.(오름차순, 내림차순) 음수, 0 ,양수
//두 객체를 비교했을 때 앞의 것이 작으면 음수, 크면 양수, 같으면 0
//사전 순서상
console.log('=======================================');
let sorted2 = person.sort((p1, p2) => p1.age - p2.age);
console.log(sorted2);
console.log('=======================================');

let sorted = person.sort((p1, p2) => {
  if (p1.name > p2.name) return 1;
  else if (p1.name < p2.name) return -1;
  else return 0;
});
console.log(sorted);
console.log('=======================================');
console.log('=======================================');
let sorted3 = person.sort();
console.log(sorted3);

console.log();

let users = [
  { name: '홍길동', workTime: 15, hourPay: 20000 },
  { name: '이사라', workTime: 20, hourPay: 25000 },
  { name: '오우오', workTime: 25, hourPay: 30000 },
  { name: '아아아', workTime: 30, hourPay: 35000 },
];

console.log('------------------forEach------------------');
let sum = 0;
users.forEach((user) => {
  console.log(user);
  total = user.hourPay * user.workTime;
  sum = total + sum;
});
console.log(sum);

console.log('------------------map------------------');
let sum1 = 0;
users.map((user) => {
  console.log(user);
  total = user.hourPay * user.workTime;
  sum1 = total + sum1;
});

console.log(sum1);
