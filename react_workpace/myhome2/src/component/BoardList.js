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
function BoardList(props) {
  const [boardList, setBoardList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalCnt, setTotalCnt] = useState(0);
  const [pg, setPg] = useState(0);

  const goPage = (pg) => {
    setPg(pg);
    loadData(pg);
  };

  const loadData = async (pg) => {
    const url = SERVERIP + '/rest_board/list/' + pg;
    await axios
      .get(url)
      .then((res) => {
        let totalCnt = res.data.totalCnt;
        let boardList = res.data.boardList;
        console.log('데이터전체개수 : ', totalCnt);
        console.log('데이터 : ', boardList);
        console.log(res.data);

        setTotalCnt(totalCnt);
        setBoardList(boardList);
        setLoading(true);
        setPg(pg);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadData(1);
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
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>사진</th>
          </tr>
        </thead>
        <tbody>
          {loading === true
            ? boardList.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>
                      <Link to={'/board/view/' + item.id}>{item.title}</Link>
                    </td>
                    <td>{item.writer}</td>
                    <td>{item.wdate}</td>
                    <td>
                      {item.filelink !== null ? (
                        <img
                          src={`http://127.0.0.1:9090/${item.filelink}`}
                          height={'100px'}
                          width={'100px'}
                        />
                      ) : (
                        ''
                      )}
                    </td>
                  </tr>
                );
              })
            : ''}
        </tbody>
      </table>
      <Pagination
        activePage={pg}
        itemsCountPerPage={10}
        totalItemsCount={totalCnt}
        pageRangeDisplayed={5}
        prevPageText={'<'}
        nextPageText={'>'}
        onChange={goPage}
      />
      <div>
        <NavLink className="btn btn-danger" to="/board/write">
          글쓰기
        </NavLink>
      </div>
    </div>
  );
}

export default BoardList;
