import React, { useCallback, useEffect, useState, createContext } from "react";

import { DrawedCard, TGameContext } from "../types/global";
import { cardService } from "../services/CardService";
import { endpoints } from "../const/api";

import { GameState } from "../const/gameState";
import pointsHelpers from "../components/points/PointsHelper";
import gameContextHelpers from "./GameContextHelper";
import { winner } from "../const/gameWinner";

export const GameContext = createContext<TGameContext>({
  playerCards: [],
  croupierCards: [],
  drawOneCard: () => {},
  message: "",
  setMessage: () => {},
  currentRoundStatus: GameState.PLACING_BET,
  setCurrentRoundStatus: () => {},
  getRoundWinner: () => winner.DRAW,
});

export function GameContextProvider({ children, deckId }) {
  const [playerCards, setPlayerCards] = useState<DrawedCard[]>([]);
  const [croupierCards, setCroupierCards] = useState<DrawedCard[]>([]);

  const [currentRoundStatus, setCurrentRoundStatus] = useState<GameState>(GameState.PLACING_BET);

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

  const getRoundWinner = () => {
    return gameContextHelpers.findWhoWonRound(
      pointsHelpers.getPlayerPoints(playerCards),
      pointsHelpers.getCroupierPoints(croupierCards, true)
    );
  } 

  useEffect(() => {
    if (currentRoundStatus === GameState.PLACING_BET && deckId !== "") {
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
    getRoundWinner
  };

  return <GameContext.Provider value={gameContextValue}>{children}</GameContext.Provider>;
}
