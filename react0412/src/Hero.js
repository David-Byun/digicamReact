import React, { useState } from 'react';

function Hero(props) {
  const [heroList, setHeroList] = useState([
    { id: 1, name: '홍길동', descript: '율도국 세움' },
    { id: 2, name: '이순신', descript: '임진왜란으로부터 나라를 구함' },
    { id: 3, name: '세종대왕', descript: '한글창제' },
    { id: 4, name: '강감찬', descript: '하하하' },
  ]);
  return (
    <ul>
      {heroList.map((item, index) => {
        return (
          <>
            <li key={index}>{item.name}</li>
            <span key={index}>{item.descript}</span>
          </>
        );
      })}
    </ul>
  );
}
export default Hero;
