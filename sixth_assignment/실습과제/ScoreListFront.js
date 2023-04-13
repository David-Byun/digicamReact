import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import { SERVERIP } from '../CommonUtil';

function ScoreList(props) {
  const [scoreList, setScoreList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    async function loadData() {
      const url = SERVERIP + '/score';
      await axios
        .get(url)
        .then((res) => {
          setScoreList(res.data);
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
            <th>학생번호</th>
            <th>이름</th>
            <th>국어</th>
            <th>영어</th>
            <th>수학</th>
          </tr>
        </thead>
        <tbody>
          {loading === true
            ? scoreList.map((item) => {
                return (
                  <tr>
                    <td>{item.student_id}</td>
                    <td>
                      <Link to={'/score/' + item.id}>{item.student}</Link>
                    </td>
                    <td>{item.kor}</td>
                    <td>{item.eng}</td>
                    <td>{item.math}</td>
                  </tr>
                );
              })
            : ''}
        </tbody>
      </table>
      <div>
        <NavLink className="btn btn-danger" to="/score/write">
          글쓰기
        </NavLink>
      </div>
    </div>
  );
}

export default ScoreList;
