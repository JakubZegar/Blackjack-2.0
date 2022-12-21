import React, { useState, useEffect } from 'react';
// NOTE ?
import { DeckResponse } from '../global';
import { newDeckShuffledLink, decksCount } from '../const/api';
import GameInterface from '../partials/GameInterface';
import axios, { AxiosResponse } from 'axios';

export default function Game() {
  const [deckId, setDeckId] = useState('');

  useEffect(() => {
    axios.get<DeckResponse>(newDeckShuffledLink + decksCount).then((result: AxiosResponse<DeckResponse>) => {
      // NOTE dlaczego nie po prostu setDeckId(result.data.deck_id)
      setDeckId(() => {
        return result.data.deck_id;
      });
    });
  }, []);

  // NOTE dlaczego nie !deckId :  <GameInterface deck={deckId} /> ? null
  return deckId !== undefined && deckId !== '' ? <GameInterface deck={deckId} /> : <></>;
}
