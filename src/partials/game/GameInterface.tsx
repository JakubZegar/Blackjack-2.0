import React, { useState, useEffect, useCallback, useContext } from 'react';

import Actions from '../actions/Actions';
import { GameContainer, MiddleContainer, PlayerSection, SideContainer } from './GameElements';
import { Preloader } from '../general/Preloader';
import Points from '../points/Points';
import Hand from '../cards/Hand';

import {GameContext, GameContextProvider} from '../../context/GameContext';

type RoundStatus = {
  player: boolean;
  computer: boolean;
};

export default function GameInterface() {

  const gameContext = useContext(GameContext)

  const [roundEnded, setRoundEnded] = useState<RoundStatus>({
    player: false,
    computer: false,
  });

  const croupierHandCards = gameContext.croupierCards.length > 0 ? <Hand isCardReversed={gameContext.isCroupierCardReversed} cards={gameContext.croupierCards} ></Hand> : null;

  const playerHandsCards = gameContext.playerCards.length > 0 ? <Hand cards={gameContext.playerCards} ></Hand> : null;

  const croupierPoints = gameContext.croupierCards.length > 0 ? <Points cards={gameContext.croupierCards} isCroupierCardReversed={gameContext.isCroupierCardReversed} /> : null

  const playerPoints = gameContext.playerCards.length > 0 ? <Points player={true} cards={gameContext.playerCards}/> : null

  const passRound = useCallback(() => {
    gameContext.setIsCroupierCardReversed(() => {
      return true;
    });
    setRoundEnded((prevRoundStatus: RoundStatus) => {
      return { ...prevRoundStatus, player: true };
    });
  }, []);

  if(gameContext.playerCards.length <= 0) {
    return <Preloader/>
  }

  return (
    <GameContextProvider>
      <GameContainer>
        <SideContainer></SideContainer>

        <MiddleContainer>

          <PlayerSection>
            {croupierHandCards}
            {croupierPoints}
          </PlayerSection>

          <Actions drawFunction={gameContext.drawOneCard} passRound={passRound} />

          <PlayerSection>
            {playerPoints}
            {playerHandsCards}
          </PlayerSection>

        </MiddleContainer>

        <SideContainer></SideContainer>
      </GameContainer>
    </GameContextProvider>

  );
}
