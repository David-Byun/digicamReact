import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [math, setMath] = useState(0);
  const [kor, setKor] = useState(0);
  const [eng, setEng] = useState(0);
  const [sum, setSum] = useState(0);
  const [con, setCon] = useState(false);
  const [avg, setAvg] = useState(0);

  return (
    <div className="App">
      이름 :{' '}
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      수학 :{' '}
      <input
        type="number"
        onChange={(e) => {
          setMath(e.target.value);
        }}
      ></input>
      영어 :{' '}
      <input
        type="number"
        onChange={(e) => {
          setEng(e.target.value);
        }}
      ></input>
      국어 :{' '}
      <input
        type="number"
        onChange={(e) => {
          setKor(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          setSum(parseInt(math) + parseInt(kor) + parseInt(eng));
          setAvg((parseInt(math) + parseInt(kor) + parseInt(eng)) / 3);
          setCon(!con);
        }}
      >
        결과확인
      </button>
      {con === true ? (
        <h1>
          {name}의 총점은 {sum} 평균은 {avg}입니다.
        </h1>
      ) : (
        ''
      )}
    </div>
  );
}

export default App;
