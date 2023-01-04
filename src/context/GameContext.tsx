import React, { useCallback, useEffect, useState, createContext } from "react";

import { DrawedCard } from "../types/global";
import { cardService } from "../services/CardService";
import { endpoints } from "../const/api";

import { TGameContext } from "../types/global";
import gameContextHelpers from "./GameContextHelper";

import { winner } from "../const/gameWinner";

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
  setRoundEnded: () => {},
  shuffleDeck: () => {},
  message: "",
  setMessage: () => {},
  roundEnded: {
    player: false,
    croupier: false,
  },
  resetRound: () => {},
  setPoints: () => {},
  points: {
    playerPoints: 0,
    croupierPoints: 0,
  },
});

export function GameContextProvider({ children }) {
  const [deckId, setDeckId] = useState("");

  const [playerCards, setPlayerCards] = useState<DrawedCard[]>([]);
  const [croupierCards, setCroupierCards] = useState<DrawedCard[]>([]);
  const [isCroupierCardReversed, setIsCroupierCardReversed] = useState(false);
  const [points, setPoints] = useState({
    playerPoints: 0,
    croupierPoints: 0,
  });

  const [roundEnded, setRoundEnded] = useState({
    player: false,
    croupier: false,
  });

  const [message, setMessage] = useState("Your turn");

  const drawOnGameStart = useCallback(() => {
    cardService.drawCards(deckId, endpoints.drawFourCardsLink).then((result: DrawedCard[]) => {
      setPlayerCards(result.slice(0, 2));
      setCroupierCards(result.slice(2, 4));
    });
  }, [deckId]);

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

  const passRound = useCallback(() => {
    setIsCroupierCardReversed(true);
    setRoundEnded((prevRoundStatus) => {
      return { ...prevRoundStatus, player: true };
    });
  }, []);

  const shuffleDeck = useCallback(() => {
    cardService.shuffleDeck(deckId);
  }, [deckId]);

  const resetRound = useCallback(() => {
    setRoundEnded({
      player: false,
      croupier: false,
    });
    drawOnGameStart();
    setIsCroupierCardReversed(false);
    setMessage("Your turn");
  }, [drawOnGameStart]);

  useEffect(() => {
    if (deckId !== "") {
      drawOnGameStart();
    }
  }, [deckId, drawOnGameStart]);

  useEffect(() => {
    if (roundEnded.player === true && roundEnded.croupier === false && points.croupierPoints <= 16) {
      setTimeout(() => {
        drawOneCard(false);
      }, 1000);
    }
  }, [points.croupierPoints]);

  useEffect(() => {
    if (roundEnded.croupier === true) {
      switch (gameContextHelpers.findWhoWonRound(points.playerPoints, points.croupierPoints)) {
        case winner.PLAYER: {
          setMessage("You win");
          break;
        }
        case winner.CROUPIER: {
          setMessage("You lost");
          break;
        }
        case winner.DRAW: {
          setMessage("Draw");
          break;
        }
        default: {
          break;
        }
      }
    }
  }, [roundEnded.croupier]);

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
    setRoundEnded,
    shuffleDeck,
    message,
    setMessage,
    roundEnded,
    resetRound,
    setPoints,
    points,
  };

  return <GameContext.Provider value={gameContextValue}>{children}</GameContext.Provider>;
}
