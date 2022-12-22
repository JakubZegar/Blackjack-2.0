import React, { useState, useEffect } from 'react';

import { cardService } from '../services/CardService';
import GameInterface from '../partials/game/GameInterface';

export default function Game() {

  const [deckId, setDeckId] = useState('')

  useEffect(() => {
    cardService.createDeck().then((deckId: string) => {
      setDeckId(deckId)
    })
  }, []);

  return Boolean(deckId) ? <GameInterface deck={deckId} /> : null;
}
