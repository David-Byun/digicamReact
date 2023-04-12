import { useEffect, useState } from 'react';
import axios from 'axios';

/*
    HeroList.js - 백엔드 서버로부터 데이터 가져온다
    axios 설치 필요 npm install axios
*/

function HeroList(props) {
  const [heroList, setHeroList] = useState([]);
  const [loading, setLoading] = useState(false);
  /*
    useState함수가 값을 초기화해주면 해당 값을 저장할 변수와 해당값을 변경하는 함수를 반환함
    [] => 배열을 저장할 변수반환, 배열값을 변환할 함수주소

    첫번째 매개변수 - mount 될때, update 될 때, unmount 될 때 호출된다.
    [] => 변수 : 변수들이 바뀔때 호출된다.
  */
  useEffect(() => {
    /* console.log('나 호출된다.');
    setHeroList(
      heroList.concat([
        { id: 1, name: '이순신', desc: '이마트근처삼' },
        { id: 2, name: '홍길동', desc: '옆집수퍼에삼' },
        { id: 3, name: '세종대왕', desc: '홈플러스 근처삼' },
      ])
    ); */
    axios
      .get('http://localhost:9090/hero/list')
      .then((res) => {
        setHeroList(res.data);
        setLoading(true);
      })
      .catch((res, status, error) => {
        console.log(status);
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>히어로 리스트</h1>

      <table>
        {loading === false ? (
          <h1>Loading....</h1>
        ) : (
          heroList.map((item, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.hero_name}</td>
                  <td>{item.hero_desc}</td>
                  <td>{item.wdate}</td>
                </tr>
              </tbody>
            );
          })
        )}
      </table>
    </div>
  );
}

export default HeroList;
