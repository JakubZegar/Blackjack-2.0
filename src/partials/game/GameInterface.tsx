import React, { useContext } from 'react';

import Actions from '../actions/Actions';
import { GameContainer, MiddleContainer, PlayerSection, SideContainer } from './GameElements';
import { Preloader } from '../general/Preloader';
import Points from '../points/Points';
import Hand from '../cards/Hand';

import {GameContext} from '../../context/GameContext';

export default function GameInterface() {

  const gameContext = useContext(GameContext)

  const playerCards = gameContext.playerCards
  const croupierCards = gameContext.croupierCards

  const croupierHandCards = croupierCards.length > 0 ? <Hand isCardReversed={gameContext.isCroupierCardReversed} cards={croupierCards} ></Hand> : null;
  const playerHandsCards = playerCards.length > 0 ? <Hand cards={playerCards} ></Hand> : null;
  const croupierPoints = croupierCards.length > 0 ? <Points cards={croupierCards} isCroupierCardReversed={gameContext.isCroupierCardReversed} /> : null
  const playerPoints = playerCards.length > 0 ? <Points player={true} cards={playerCards}/> : null

  if(playerCards.length <= 0) {
    return <Preloader/>
  }

  return (
    <GameContainer>
      <SideContainer></SideContainer>

      <MiddleContainer>

        <PlayerSection>
          {croupierHandCards}
          {croupierPoints}
        </PlayerSection>

        <Actions/>

        <PlayerSection>
          {playerPoints}
          {playerHandsCards}
        </PlayerSection>

      </MiddleContainer>

      <SideContainer></SideContainer>
    </GameContainer>

  );
}
