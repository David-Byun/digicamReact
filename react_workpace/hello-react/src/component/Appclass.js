import React from 'react';

function Appclass({ address, title }) {
  //props = 부모 컴포넌트로부터 자식 컴포넌트에 값을 보내기 위한 수단이다. 자식 컴포넌트로부터 부모 컴포넌트로 값을 보낼 수단은 없다.
  /* const { name, age, phone } = {
    name: '홍길동',
    age: 23,
    phone: '010-2323-2323',
  }; */
  const { name, age, phone } = {
    name: '홍길동',
    age: 23,
    phone: '010-2323-2323',
  };
  return (
    <div>
      <h1>{title}</h1>
      <h3>이름 : {name}</h3>
      <h3>나이 : {age}</h3>
      <h3>전화 : {phone}</h3>
      <h3>주소 : {address}</h3>
    </div>
  );
}

export default Appclass;
