import React, { useState } from 'react';

//props사용하던 말던 기본 매개변수로 사용하자
function Inputtest(props) {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');

  //람수 함수 - 일반 함수의 경우 생성자에서 바인딩이라는 작업을 해야한다.

  const nameChange = (e) => {
    //인자가 - 발생한 이벤트에 대한 모든 정보
    setName(e.target.value); //name 변수의 값이 바뀐다
  };
  const ageChange = (e) => {
    setAge(e.target.value);
  };
  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  let style = {
    color: 'white',
    backgroundColor: 'blue',
    fontSize: '10pt',
  };
  return (
    <div>
      이름 :{' '}
      <input
        type="text"
        onChange={nameChange}
        style={{ color: 'red', backgroundColor: '#002343' }}
      ></input>
      나이 : <input type="text" onChange={ageChange} style={style}></input>
      이메일 : <input type="text" onChange={emailChange}></input>
      <p>
        {name} {age} {email}
      </p>
    </div>
  );
}

export default Inputtest;
