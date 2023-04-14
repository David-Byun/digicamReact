import 'bootstrap/dist/css/bootstrap.min.css';
import { SERVERIP } from '../CommonUtil';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';

/*
    frontend - Axios(Ajax 라이브러리) 비동기로 서버로 정보를 주고 받는 담당
    backend - nodejs 기반의 express : 디비서버에 붙어서 데이터 읽고 쓰기
    frontend 가 heroList 를 요구한다. Axios를 통해서 backend에 요청하면 디비서버에서 데이터 읽어서,
    json으로 Axios한테 보냄.

    frontend - axios - backend
*/
function HeroView(props) {
  const [boardList, setBoardList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    async function loadData() {
      const url = SERVERIP + '/hero/list';
      await axios
        .get(url)
        .then((res) => {
          setBoardList(res.data);
          setLoading(true);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    loadData();
  }, []);

  return (
    <div className="container">
      <div className="input-group mb-3" style={{ marginTop: '20px' }}>
        <button
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          선택하세요
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              제목
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              내용
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              제목+내용
            </a>
          </li>
        </ul>
        <input type="text" className="form-control" placeholder="Search" />
        <button className="btn btn-secondary" type="submit">
          Go
        </button>
      </div>

      <table className="table table-hover ">
        <thead className="table-secondary">
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {loading === true
            ? boardList.map((item) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>
                      <Link to={'/board/view/' + item.id}>
                        {item.hero_name}
                      </Link>
                    </td>
                    <td>{item.hero_desc}</td>
                  </tr>
                );
              })
            : ''}
        </tbody>
      </table>
      <div>
        <NavLink className="btn btn-danger" to="/board/write">
          글쓰기
        </NavLink>
      </div>
    </div>
  );
}

export default HeroView;
