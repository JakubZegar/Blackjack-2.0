import React, {useCallback, useEffect, useState, createContext} from 'react'

import { DrawedCard } from '../types/global'
import { cardService } from '../services/CardService'
import { endpoints } from '../const/api'

import { TGameContext } from '../types/global'

export const GameContext = createContext<TGameContext>({
  deckId: 'dxx',
  setDeckId: () => {},
  playerCards: [],
  croupierCards: [],
  isCroupierCardReversed: false,
  setIsCroupierCardReversed: () => {},
  drawOnGameStart: () => {},
  drawOneCard: () => {},
})


export function GameContextProvider({children}) {

  const [deckId, setDeckId] = useState('')

  const [playerCards, setPlayerCards] = useState<DrawedCard[]>([]);
  const [croupierCards, setCroupierCards] = useState<DrawedCard[]>([]);
  const [isCroupierCardReversed, setIsCroupierCardReversed] = useState<boolean>(false);

  const drawOnGameStart = useCallback(() => {    
    cardService.drawCards(deckId, endpoints.drawFourCardsLink).then( (result: DrawedCard[]) => {
      setPlayerCards(result.slice(0,2));
      setCroupierCards(result.slice(2,4));
    })
  }, [deckId]);

  const drawOneCard = (player:boolean = true) => {
    cardService.drawCards(deckId, endpoints.drawOneCardLink).then( (result: DrawedCard[]) => {
      player ? setPlayerCards((prevCards) => {return [...prevCards, ...result]}) : setCroupierCards((prevCards) => {return [...prevCards, ...result]});
    })
  };

  useEffect(() => {
    if( deckId !== ''){      
      drawOnGameStart();
    }
  }, [deckId, drawOnGameStart])

  const gameContextValue = {
    deckId,
    setDeckId,
    playerCards,
    croupierCards,
    isCroupierCardReversed,
    setIsCroupierCardReversed,
    drawOnGameStart,
    drawOneCard
  }

  return (
    <GameContext.Provider value={gameContextValue} >{children}</GameContext.Provider>
  )
}

