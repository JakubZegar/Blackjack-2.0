import React from 'react';

import Game from './pages/Game';
import HomePage from './pages/HomePage';
import Leaderboard from './pages/Leaderboard';

import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePageContainer } from './partials/components/HomePageElements';
function App() {
  return (
    <HomePageContainer>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/game' element={<Game />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
        </Routes>
      </BrowserRouter>
    </HomePageContainer>
  );
}

export default App;
