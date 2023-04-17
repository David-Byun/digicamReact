import 'bootstrap/dist/css/bootstrap.min.css';
import { SERVERIP } from '../CommonUtil';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, NavLink, useParams } from 'react-router-dom';
import Pagination from 'react-js-pagination';

/*
    frontend - Axios(Ajax 라이브러리) 비동기로 서버로 정보를 주고 받는 담당
    backend - nodejs 기반의 express : 디비서버에 붙어서 데이터 읽고 쓰기
    frontend 가 heroList 를 요구한다. Axios를 통해서 backend에 요청하면 디비서버에서 데이터 읽어서,
    json으로 Axios한테 보냄.

    frontend - axios - backend
*/
function BoardView(props) {
  const [boardList, setBoardList] = useState([]);

  useEffect(() => {}, []);

  return <div className="container"></div>;
}

export default BoardView;
