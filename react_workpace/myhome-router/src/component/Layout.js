import { Routes, Route, Outlet, Link } from 'react-router-dom';
import React from 'react';

function Layout(props) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
        </ul>
      </nav>{' '}
      {/*메뉴*/}
      <Outlet /> {/* 각 컴포넌트의 내용이 뿌려질 위치 */}
    </div>
  );
}

export default Layout;
