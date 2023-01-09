import React, { useCallback, useState, createContext } from "react";

import { cardService } from "../services/CardService";

import { TDeckContext } from "../types/global";


export const DeckContext = createContext<TDeckContext>({
  deckId: "",
  setDeckId: () => {},
  shuffleDeck: () => {},
});

export function DeckContextProvider({ children }) {
  const [deckId, setDeckId] = useState("");


  const shuffleDeck = useCallback(() => {
    cardService.shuffleDeck(deckId);
  }, [deckId]);


  const deckContextValue = {
    deckId,
    setDeckId,
    shuffleDeck
  };

  return <DeckContext.Provider value={deckContextValue}>{children}</DeckContext.Provider>;
}
