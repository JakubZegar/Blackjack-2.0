import React, { useCallback, useEffect, useState, createContext } from "react";

import { DrawedCard, TGameContext } from "../types/global";
import { cardService } from "../services/CardService";
import { endpoints } from "../const/api";

import { GameState } from "../const/gameState";

export const GameContext = createContext<TGameContext>({
  playerCards: [],
  croupierCards: [],
  drawOneCard: () => {},
  message: "",
  setMessage: () => {},
  currentRoundStatus: GameState.DRAW_CARDS,
  setCurrentRoundStatus: () => {},
});

export function GameContextProvider({ children, deckId }) {
  const [playerCards, setPlayerCards] = useState<DrawedCard[]>([]);
  const [croupierCards, setCroupierCards] = useState<DrawedCard[]>([]);

  const [currentRoundStatus, setCurrentRoundStatus] = useState<GameState>(GameState.DRAW_CARDS);

  const [message, setMessage] = useState("Your turn");

  const drawOneCard = useCallback(
    (player = true) => {
      cardService.drawCards(deckId, endpoints.drawOneCardLink).then((result) => {
        if (player) {
          setPlayerCards((prevCards) => {
            return [...prevCards, ...result];
          });
        } else {
          setCroupierCards((prevCards) => {
            return [...prevCards, ...result];
          });
        }
      });
    },
    [deckId]
  );

  useEffect(() => {
    if (currentRoundStatus === GameState.DRAW_CARDS && deckId !== "") {
      cardService.drawCards(deckId, endpoints.drawFourCardsLink).then((result: DrawedCard[]) => {
        setPlayerCards(result.slice(0, 2));
        setCroupierCards(result.slice(2, 4));
      });
      setMessage("Your turn");
      setCurrentRoundStatus(GameState.PLAYER_ROUND);
    }
  }, [playerCards, croupierCards, currentRoundStatus, deckId, setCurrentRoundStatus]);

  const gameContextValue = {
    playerCards,
    croupierCards,
    drawOneCard,
    message,
    setMessage,
    currentRoundStatus,
    setCurrentRoundStatus,
  };

  return <GameContext.Provider value={gameContextValue}>{children}</GameContext.Provider>;
}
