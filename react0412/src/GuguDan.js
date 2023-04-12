import { useEffect, useState } from 'react';

function GuguDan() {
  const [cal, setCal] = useState([]);
  const calNumber = (e) => {
    setCal(e.target.value);
  };
  const [show, setShow] = useState(false);
  const showResult = (e) => {
    setCal(cal);
    setShow(!show);
  };
  useEffect(() => {
    if (cal == '') {
      setShow(false);
    }
  }, [cal]);
  return (
    <div>
      구구단 : <input type="text" onChange={calNumber}></input>{' '}
      <button type="button" onClick={showResult}>
        계산
      </button>
      {show
        ? [1, 2, 3, 4, 5, 6, 7, 8, 9].map((a, b) => {
            return (
              <div>
                <span>
                  {cal} * {a} = {a * cal}
                </span>
              </div>
            );
          })
        : ''}
    </div>
  );
}

export default GuguDan;
