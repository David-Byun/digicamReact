let a = function () {
  console.log('Hello');
};

let result = a();

let nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

//배열의 요소, index 자바스크립트가 제공하는 람다들이 이 구조
nums.map((x, i) => {
  console.log(i, x);
  return x;
});

//2차원의 경우
nums = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
];

console.log('===================================================');

nums.map((x, i) => {
  x.map((y, j) => {
    console.log(i, y, j);
    // return y;
  });
  return x;
});
console.log(result);
