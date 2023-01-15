import React, { useCallback, useEffect, useState, createContext } from "react";

import { DrawedCard, EndedRoundStatus } from "../types/global";
import { cardService } from "../services/CardService";
import { endpoints } from "../const/api";

import { TGameContext } from "../types/global";
import gameContextHelpers from "./GameContextHelper";

import { winner } from "../const/gameWinner";

export const GameContext = createContext<TGameContext>({
  playerCards: [],
  croupierCards: [],
  drawOnGameStart: () => {},
  drawOneCard: () => {},
  setRoundEnded: () => {},
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
  prevoiusRounds: [],
});

export function GameContextProvider({ children, deckId }) {
  const [playerCards, setPlayerCards] = useState<DrawedCard[]>([]);
  const [croupierCards, setCroupierCards] = useState<DrawedCard[]>([]);
  const [points, setPoints] = useState({
    playerPoints: 0,
    croupierPoints: 0,
  });

  const [prevoiusRounds, setPreviousRounds] = useState<EndedRoundStatus[]>([]);

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

  const resetRound = useCallback(() => {
    setRoundEnded({
      player: false,
      croupier: false,
    });
    drawOnGameStart();
    setMessage("Your turn");
  }, [drawOnGameStart]);

  useEffect(() => {
    if (deckId !== "") {
      drawOnGameStart();
    }
  }, [deckId, drawOnGameStart]);

  useEffect(() => {
    if (roundEnded.croupier) {
      let newMessage: string;
      let currentRoundWinner: winner.PLAYER | winner.CROUPIER | winner.DRAW;

      switch (gameContextHelpers.findWhoWonRound(points.playerPoints, points.croupierPoints)) {
        case winner.PLAYER: {
          newMessage = "You win";
          currentRoundWinner = winner.PLAYER;
          break;
        }
        case winner.CROUPIER: {
          newMessage = "You lost";
          currentRoundWinner = winner.CROUPIER;
          break;
        }
        case winner.DRAW: {
          newMessage = "Draw";
          currentRoundWinner = winner.DRAW;
          break;
        }
        default: {
          newMessage = "Winner not recoginzed";
          currentRoundWinner = winner.DRAW;
          break;
        }
      }

      setPreviousRounds((prevRounds) => {
        return [
          ...prevRounds,
          {
            playerCards: playerCards,
            croupierCards: croupierCards,
            winner: currentRoundWinner,
            amountWon: 0,
          },
        ];
      });
      setMessage(newMessage);
    }
  }, [points.croupierPoints, points.playerPoints, roundEnded.croupier]);

  const gameContextValue = {
    playerCards,
    croupierCards,
    drawOnGameStart,
    drawOneCard,
    setRoundEnded,
    message,
    setMessage,
    roundEnded,
    resetRound,
    setPoints,
    points,
    prevoiusRounds,
  };

  return <GameContext.Provider value={gameContextValue}>{children}</GameContext.Provider>;
}
