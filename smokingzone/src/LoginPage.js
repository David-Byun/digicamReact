import { useEffect, useState } from 'react';
import Content from './Content';
import axios from 'axios';

function LoginPage() {
  let [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://apis.data.go.kr/3040000/smokingService/getSmkAreaList?type=json&id=&serviceKey=BTUPGQD1WBOeVK%2B0i3EgXDfU81MdAeHmk%2Bnqn%2F7PZAgVbwegdeAn%2F7rm3CiLk%2FJ0d7f5YSUDiCRXyx9rjgzkDg%3D%3D&pageNo=1&numOfRows=10`
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Content data={data} />
    </div>
  );
}

export default LoginPage;
