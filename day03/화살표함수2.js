let rect = [
  { w: 5, h: 4 },
  { w: 15, h: 14 },
  { w: 7, h: 8 },
  { w: 9, h: 4 },
];

// map
let r = rect.map((r) => {
  r.len = (r.w + r.h) * 2;
  r.surface = r.w * r.h;
  return r;
});

console.log(rect);

console.log(r);
let a = rect.map((a) => {
  a.w = a.w * a.h;
  return a;
});

console.log(a);

/*
    p1 = new Person(): 힙공간에 Person객체 생성하고 생성한 객체의 첫번째 번지값을 p1에 할당. 만일 메모리가 부족해서 객체 생성 못할경우 null 채워짐
    Person p1 변수 자체는 스택에 저장된다. 이 변수에는 객체의 주소가 저장되기 때문에 참조 변수라고 부른다. 아직 데이터를 저장할 공간은 없다.
    p1 = new Person(); 앞에 객체는 참조하는 변수가 없으면 gabage collector(gc)가 메모리 부족할때 수거를 해간다.
    List<Integer> list = new ArrayList<Integer>();
    값 타입을 객체로 전환해야 할 때가 있다. 값 => 객체로 전환시키는 클래스를 Wrapper Class라고 한다.

*/

let users = [
  { 이름: '홍길동', 근무시간: 40, 시간당급여액: 10000 },
  { 이름: '임꺽정', 근무시간: 15, 시간당급여액: 20000 },
  { 이름: '장길산', 근무시간: 20, 시간당급여액: 20000 },
  { 이름: '강감찬', 근무시간: 30, 시간당급여액: 15000 },
  { 이름: '이순신', 근무시간: 40, 시간당급여액: 30000 },
];

users.forEach((user) => {
  console.log(
    `이름 : ${user.이름} 근무시간 : ${user.근무시간} 시간당급여액 : ${
      user.시간당급여액
    } 주급 : ${user.근무시간 * user.시간당급여액}`
  );
});

let myproduct = {
  product_name: '노트북',
  product_info: [
    { company: '회사1', model: 'modelAAA', price: 2000000 },
    { company: '회사2', model: 'modelBBB', price: 1400000 },
    { company: '회사3', model: 'modelCCC', price: 1700000 },
  ],
};

console.log(myproduct.product_name);
for (item of myproduct.product_info) {
  console.log(item.company, item.model, item.price);
}
