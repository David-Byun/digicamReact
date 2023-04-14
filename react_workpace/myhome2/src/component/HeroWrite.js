import 'bootstrap/dist/css/bootstrap.min.css';
import { SERVERIP } from '../CommonUtil';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

function HeroWrite(props) {
  let { id } = useParams(); //보내는 쪽에서 json객체로 보냄
  let history = useNavigate();

  const [heroName, setHeroName] = useState('');
  const [heroDesc, setHeroDesc] = useState('');

  useEffect(() => {
    async function loadData() {
      await axios
        .get(SERVERIP + '/hero/view/' + id)
        .then((res) => {
          setHeroName(res.data.hero.hero_name);
          setHeroDesc(res.data.hero.hero_desc);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (id != undefined) loadData();
    //BoardWrite 컴포넌트가 /board/write 일때는 undefined가 오고 /board/view/1 id에는 1이 온다.
  }, []);

  const nameChange = (e) => {
    setHeroName(e.target.value);
  };
  const descChange = (e) => {
    setHeroDesc(e.target.value);
  };
  //서버로 전송하기
  const postData = () => {
    //데이터를 json으로 묶어서 보내야 한다.
    let data = { hero_name: heroName, hero_desc: heroDesc };
    axios
      .post(SERVERIP + '/hero/write', data)
      .then((res) => history('/hero/list')) //redirect에 대용
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container" style={{ marginTop: '80px' }}>
      <h2>게시판 쓰기</h2>
      <table className="table table-hover " style={{ marginTop: '30px' }}>
        <colgroup>
          <col width="25%" />
          <col width="*" />
        </colgroup>
        <tbody style={{ verticalAlign: 'middle' }}>
          <tr>
            <td>제목</td>
            <td>
              <div className="mb-3" style={{ marginTop: '13px' }}>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  placeholder="제목을 입력하세요"
                  onChange={nameChange}
                  value={id}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>작성자</td>
            <td>
              <div className="mb-3" style={{ marginTop: '13px' }}>
                <input
                  type="text"
                  className="form-control"
                  id="writer"
                  name="writer"
                  placeholder="이름을 입력하세요"
                  onChange={descChange}
                  value={heroName}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>내용</td>
            <td>
              <div className="mb-3" style={{ marginTop: '13px' }}>
                <textarea
                  className="form-control"
                  rows="5"
                  id="contents"
                  name="contents"
                  value={heroDesc}
                ></textarea>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="container mt-3" style={{ textAlign: 'right' }}>
        <NavLink className="btn btn-secondary" onClick={postData}>
          등록
        </NavLink>
        <NavLink className="btn btn-secondary" to="/board">
          취소
        </NavLink>
      </div>
    </div>
  );
}

export default HeroWrite;
