import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import Home from './component/Home';
import BoardList from './component/BoardList';
import BoardWrite from './component/BoardWrite';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/board/list" element={<BoardList />} />
          <Route path="/board/write" element={<BoardWrite />} />
          <Route path="/board/view/:id" element={<BoardWrite />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
