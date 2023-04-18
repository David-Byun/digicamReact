import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import Home from './component/Home';
import HeroList from './component/HeroList';
import HeroWrite from './component/HeroWrite';
import BoardList from './component/BoardList';
import BoardWrite from './component/BoardWrite';
import BoardView from './component/BoardView';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/hero/list" element={<HeroList />} />
          <Route path="/hero/write" element={<HeroWrite />} />
          <Route path="/board/view/:id" element={<BoardView />} />
          <Route path="/board/list/:pg" element={<BoardList />} />
          <Route path="/board/write" element={<BoardWrite />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
