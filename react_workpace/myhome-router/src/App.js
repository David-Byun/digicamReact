import { Routes, Route, Outlet, Link } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './component/Home';
import About from './component/About';
import Fortest from './component/Fortest';
import Profile from './component/Profile';
import GuguDan from './component/GuguDan';

function App() {
  return (
    <div className="App">
      <h1>라우터 연습</h1>
      {/* path = 가상 url, element = 컴포넌트*/}

      <Routes>
        <Route path="/" element={<Layout />}>
          {/* 전체적인 라우터 골격은 Layout 컴포넌트에 놓는다 */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="fortest" element={<Fortest />} />
          <Route path="gugudan" element={<GuguDan />} />
        </Route>
        <Route path="/item"></Route>

        <Route path="/profiles/:username" element={<Profile />}>
          {/* 전체적인 라우터 골격은 Layout 컴포넌트에 놓는다 */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
