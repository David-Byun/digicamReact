async function sigma(limit) {
  sum = 0;
  for (i = 1; i <= limit; i++) {
    sum += i;
  }
  return sum; //async에 의해 무조건 Promise 객체로 바뀌어서 전달된다.
}

async function showDisplay() {
  let result = await sigma(1000); //기다린다. 반환값이 프라미스 객체가 아니다.
}

//async-await 무조건 Promise 객체를 받아야하는가 ?

showDisplay();

/* console.log(sigma(100));
sigma(100).then((result) => {
  console.log(result);
}); */
