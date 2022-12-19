import React, {useState, useEffect} from 'react'
import { DeckResponse } from '../types/global'
import { newDeckShuffledLink, decksCount } from '../const/api';
import GameInterface from '../partials/GameInterface';
import axios, { AxiosResponse } from 'axios';

export default function Game() {

  const [deckId, setDeckId] = useState('')

  useEffect(() => {
    axios.get<DeckResponse>(newDeckShuffledLink + decksCount).then((result: AxiosResponse<DeckResponse> ) => {
      setDeckId(() => {return result.data.deck_id})
    })
  }, [])

  return (
    deckId !== undefined && deckId !== '' ? <GameInterface deck={deckId} /> : <></> 
  )
}