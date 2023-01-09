import React, { useEffect } from "react";

import GameInterface from "../components/game/GameInterface";

import { cardService } from "../services/CardService";
import { GameContextProvider } from "../context/GameContext";
import useDeckContext from "../hooks/useDeckContext";

export default function Game() {
  const { deckId, setDeckId } = useDeckContext();

  useEffect(() => {
    cardService.createDeck().then((deckId: string) => {
      if (deckId) {
        setDeckId(deckId);
      }
    });
  }, [setDeckId]);

  return deckId ? <GameContextProvider deckId={deckId}><GameInterface /></GameContextProvider> : null;
}
