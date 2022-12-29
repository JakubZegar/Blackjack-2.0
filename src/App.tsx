import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Game from "./pages/Game";
import Leaderboard from "./pages/Leaderboard";
import { HomePageContainer } from "./components/home/HomePageElements";

import "./App.css";
import { GameContextProvider } from "./context/GameContext";

function App() {
  return (
    <GameContextProvider>
      <HomePageContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/game" element={<Game />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </BrowserRouter>
      </HomePageContainer>
    </GameContextProvider>
  );
}

export default App;
