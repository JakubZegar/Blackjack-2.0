import React, { useContext, useEffect } from "react";

import GameInterface from "../components/game/GameInterface";

import { cardService } from "../services/CardService";
import useGameContext from "../hooks/useGameContext";

export default function Game() {
  const { deckId, setDeckId } = useGameContext();

  useEffect(() => {
    cardService.createDeck().then((deckId: string) => {
      if (Boolean(deckId)) {
        setDeckId(deckId);
      }
    });
  }, [setDeckId]);

  return Boolean(deckId) ? <GameInterface /> : null;
}
