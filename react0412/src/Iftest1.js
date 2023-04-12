import React, { useState } from 'react';

function Iftest1() {
  const [flag, setFlag] = useState(true);
  const changeFlag = () => {
    setFlag(!flag);
  };
  return (
    <div>
      <h1>if 테스트 {flag}</h1>
      <button type="button" onClick={changeFlag}>
        토글
      </button>
      {flag ? <p>이 문구가 보입니다</p> : <p></p>}
    </div>
  );
}

export default Iftest1;
