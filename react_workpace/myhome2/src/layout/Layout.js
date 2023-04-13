import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, NavLink } from 'react-router-dom';

//부트스트랩 라이브러리

function Layout() {
  /* anchor 태그 말고 NavLink 를 쓰자. a 태그 쓰면 페이지 전체가 새로고침된다. */
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/board/list">
                게시판
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet></Outlet>
    </div>
  );
}

export default Layout;
