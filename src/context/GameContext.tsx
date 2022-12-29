import React, { useCallback, useEffect, useState, createContext } from "react";

import { DrawedCard } from "../types/global";
import { cardService } from "../services/CardService";
import { endpoints } from "../const/api";

import { TGameContext } from "../types/global";

export const GameContext = createContext<TGameContext>({
  deckId: "",
  setDeckId: () => {},
  playerCards: [],
  croupierCards: [],
  isCroupierCardReversed: false,
  setIsCroupierCardReversed: () => {},
  drawOnGameStart: () => {},
  drawOneCard: () => {},
  passRound: () => {},
  shuffleDeck: () => {},
});

export function GameContextProvider({ children }) {
  const [deckId, setDeckId] = useState("");

  const [playerCards, setPlayerCards] = useState<DrawedCard[]>([]);
  const [croupierCards, setCroupierCards] = useState<DrawedCard[]>([]);
  const [isCroupierCardReversed, setIsCroupierCardReversed] =
    useState<boolean>(false);

  const [roundEnded, setRoundEnded] = useState({
    player: false,
    computer: false,
  });

  const drawOnGameStart = useCallback(() => {
    cardService
      .drawCards(deckId, endpoints.drawFourCardsLink)
      .then((result: DrawedCard[]) => {
        setPlayerCards(result.slice(0, 2));
        setCroupierCards(result.slice(2, 4));
      });
  }, [deckId]);

  const drawOneCard = useCallback(
    (player = true) => {
      cardService
        .drawCards(deckId, endpoints.drawOneCardLink)
        .then((result) => {
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

  const passRound = useCallback(() => {
    setIsCroupierCardReversed(true);
    setRoundEnded((prevRoundStatus) => {
      return { ...prevRoundStatus, player: true };
    });
  }, []);

  const shuffleDeck = useCallback(() => {
    cardService.shuffleDeck(deckId);
  }, [deckId]);

  useEffect(() => {
    if (deckId !== "") {
      drawOnGameStart();
    }
  }, [deckId, drawOnGameStart]);

  const gameContextValue = {
    deckId,
    setDeckId,
    playerCards,
    croupierCards,
    isCroupierCardReversed,
    setIsCroupierCardReversed,
    drawOnGameStart,
    drawOneCard,
    passRound,
    shuffleDeck,
  };

  return (
    <GameContext.Provider value={gameContextValue}>
      {children}
    </GameContext.Provider>
  );
}
