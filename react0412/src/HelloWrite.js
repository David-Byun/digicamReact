import React, { useEffect, useState } from 'react';
import HeroList from './HeroList';
import axios from 'axios';

function HeroWrite(props) {
  const [hero_name, setHeroName] = useState('');
  //useState 함수가 문자열 변수랑 변수값 바꾸는 함수를 만들어서 배열 형태로 전달한다.
  const [hero_desc, setHeroDesc] = useState('');
  const [heroes, setHeroes] = useState([]);
  //input태그의 값이 바뀌면 이 함수가 호출된다.
  const heroNameChange = (e) => {
    setHeroName(e.target.value);
  };

  const heroDescChange = (e) => {
    setHeroDesc(e.target.value);
  };

  /*
        form 태그를 써서 서버로 전송할때 <button> 태그에 type="button" 속성이 없으면 submit() 함수가 호출된다. 
        onSubmit 함수의 경우 무조건 서버로 전송한다.
    */

  const onSubmit = (e) => {
    /*
        Spring은 데이터를 문자로 받아야 한다
        Axios는 JSON으로 데이터를 주고 받는다.
        submit 버튼의 submit 기능을 막고, 별도의 처리를 한다.
    */
    e.preventDefault();
    axios
      .post('http://localhost:9090/hero/write', {
        hero_name: hero_name,
        hero_desc: hero_desc,
      })
      .then((res) => {
        console.log(res.data.result);
        axios
          .get('http://localhost:9090/hero/list')
          .then((res) => {
            setHeroes(res.data.heroes);
          })
          .catch((error) => {
            console.log(error);
          });
        setHeroName('');
        setHeroDesc('');
      })
      .catch((error) => {
        console.log(error);
      });
    /*
        form 태그를 통해 서버에 정보를 전송전에 호출된다.
        버튼의 기본 기능을 정지시킨다. submit버튼의 submit 기능을 막고,
        별도의 처리를 한다.
    */
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>영웅</h1>
        이름 : <input type="text" onChange={heroNameChange}></input>
        업적 : <input type="text" onChange={heroDescChange}></input>
        <button>추가</button>
      </form>
    </div>
  );
}

export default HeroWrite;
