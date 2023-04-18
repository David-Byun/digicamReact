import 'bootstrap/dist/css/bootstrap.min.css';
import { SERVERIP } from '../CommonUtil';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

function BoardView(props) {
  let { id } = useParams(); //보내는 쪽에서 json객체로 보냄
  let history = useNavigate();

  /* const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [writer, setWriter] = useState(''); */

  //변수 4개를 하나의 JSON 객체로 저장 필드가 많을때 변수 하나씩 만들면 힘들다
  const [inputs, setInputs] = useState({
    title: '',
    writer: '',
    contents: '',
    filename: '',
  });

  useEffect(() => {
    async function loadData() {
      await axios
        .get(SERVERIP + '/rest_board/view/' + id)
        .then((res) => {
          console.log(res.data);
          console.log(res.data.result);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (id != undefined) loadData();
    //BoardWrite 컴포넌트가 /board/write 일때는 undefined가 오고 /board/view/1 id에는 1이 온다.
  }, []);

  const onChange = (e) => {
    const { value, name } = e.target; //입력객체로부터 값과 이름을 가져온다.
    console.log(value, name);
    setInputs({ ...inputs, [name]: value }); //{...inputs} - json객체 복사

    /*
    위 코드를 해석하면 아래처럼 나온다.
    let temp = inputs;
    temp[name] = value;
    setInputs(temp)
    */
  };

  /* 
  const titleChange = (e) => {
    setTitle(e.target.value);
  };
  const writerChange = (e) => {
    setWriter(e.target.value);
  };
  const contentsChange = (e) => {
    setContents(e.target.value);
  }; */
  //서버로 전송하기
  const postData = () => {
    let frmData = new FormData();
    frmData.append('title', inputs.title);
    frmData.append('writer', inputs.writer);
    frmData.append('contents', inputs.contents);
    frmData.append('file', window.document.myform.file.files[0]);
    /*
      파일 첨부시 자바스크립트가 파일 여러개 첨부하는거로 처리한다. 그래서 무조건 배열의 형태이다.
      document.폼이름.file태그의name속성.files[0]; 여러개 추가할 수도 있다.
    */

    /* //데이터를 json으로 묶어서 보내야 한다.
    let data = { title, writer, contents }; */
    axios
      .post(SERVERIP + '/rest_board/write', frmData)
      .then((res) => history('/board/list/1')) //redirect에 대용
      .catch((error) => {
        console.log(error);
      });
  };
  //JSON을 각개 변수로 해체(destruction)
  const { title, writer, contents, file } = inputs;
  return (
    <div className="container" style={{ marginTop: '80px' }}>
      <form name="myform" method="post" encType="multipart/form-data">
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
                    onChange={onChange}
                    value={title}
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
                    onChange={onChange}
                    value={writer}
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
                    onChange={onChange}
                    value={contents}
                  ></textarea>
                </div>
              </td>
            </tr>
            <tr>
              <td>파일</td>
              <td>
                <div className="mb-3" style={{ marginTop: '13px' }}>
                  <input
                    className="form-control"
                    rows="5"
                    id="file"
                    name="file"
                    onChange={onChange}
                    value={file}
                    type="file"
                  ></input>
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
      </form>
    </div>
  );
}

export default BoardView;
