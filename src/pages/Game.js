import React, {useState, useEffect} from 'react'
import { newDeckShuffledLink, decksCount } from '../const/api';
import GameInterface from '../partials/GameInterface';
import axios from 'axios';

export default function Game() {

  const [deckId, setDeckId] = useState('')

  useEffect(() => {
    axios.get(newDeckShuffledLink + decksCount).then((result) => {
      setDeckId(() => {return result.data.deck_id})
    })
  }, [])


  return (
    deckId !== undefined && deckId !== '' ? <GameInterface deck={deckId} /> : <></> 
  )
}
