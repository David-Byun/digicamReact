import React, { useState } from 'react';

function Hero(props) {
  const [heroList, setHeroList] = useState([
    { id: 1, name: '홍길동', descript: '율도국 세움' },
    { id: 2, name: '이순신', descript: '임진왜란으로부터 나라를 구함' },
    { id: 3, name: '세종대왕', descript: '한글창제' },
    { id: 4, name: '강감찬', descript: '하하하' },
  ]);
  const [hero, setHero] = useState({ id: '', name: '', descript: '' });
  const [cal, setCal] = useState([]);
  const nameChange = (e) => {
    /*  let h = hero;
    h.id = 999;
    h.name = e.target.value;
    setHero(h); */
  };

  const descrChange = (e) => {
    /* let h = hero;
    h.descript = e.target.value;
    setHero(h); */
  };

  const goAppend = () => {
    setHero(hero);
    setHeroList(heroList.concat(hero));
  };
  return (
    <div>
      이름 : <input type="text" onChange={nameChange}></input>
      업적 : <input type="text" onChange={descrChange}></input>
      <button type="button" onClick={goAppend}>
        추가
      </button>
      <h1>Hero 테이블</h1>
      <table>
        {heroList.map((hero, index) => {
          return (
            <tr key={index}>
              <td>{hero.id}</td>
              <td>{hero.name}</td>
              <td>{hero.descript}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
export default Hero;
