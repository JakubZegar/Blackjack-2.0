import React, { useContext, useEffect } from 'react';

import GameInterface from '../partials/game/GameInterface';

import { cardService } from '../services/CardService';
import { GameContext } from '../context/GameContext';

export default function Game() {

  const gameContext = useContext(GameContext);
  const contextSetDeckId = gameContext.setDeckId

  useEffect(() => {
    cardService.createDeck().then((deckId: string) => {
      contextSetDeckId(deckId);
    })
  }, [contextSetDeckId]);

  return Boolean(gameContext.deckId) ? <GameInterface/> : null;
}
