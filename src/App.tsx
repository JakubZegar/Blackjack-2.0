import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import Game from './pages/Game';
import Leaderboard from './pages/Leaderboard';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { HomePageContainer } from './partials/components/HomePageElements';
function App() {
  return (
    <HomePageContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/game" element={<Game/>} />
          <Route path="/leaderboard" element={<Leaderboard/>} />
        </Routes>
      </BrowserRouter>
    </HomePageContainer>
  );
}

export default App;
