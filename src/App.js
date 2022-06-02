import './App.css';
import HomePage from './pages/HomePage';
import Game from './pages/Game';
import Leaderboard from './pages/Leaderboard';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/game" element={<Game/>} />
        <Route path="/leaderboard" element={<Leaderboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
