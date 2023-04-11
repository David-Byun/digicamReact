import React, { useState } from 'react';

function HelloComponent(props) {
  const sayHello = () => {
    console.log('하이');
  };
  return (
    <div>
      <h1>함수호출하기</h1>
      <button onClick={sayHello}>버튼</button>
    </div>
  );
}

export default HelloComponent;
