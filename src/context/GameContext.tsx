import React, { SetStateAction, useCallback, useEffect, useMemo, useState, createContext } from "react";

import { DrawedCard, EndedRoundStatus } from "../types/global";
import { cardService } from "../services/CardService";
import { endpoints } from "../const/api";

import gameContextHelpers from "./GameContextHelper";
import pointsHelpers from "../components/points/PointsHelper";

import { winner } from "../const/gameWinner";
import { GameState } from "../const/gameState";

type TGameContext = {
  playerCards: DrawedCard[];
  croupierCards: DrawedCard[];
  drawOneCard: (player?: boolean) => void;
  message: string;
  setMessage: (message: SetStateAction<string>) => void;
  prevoiusRounds: EndedRoundStatus[];
  roundWinners: winner[];
  currentRoundStatus: GameState;
  setCurrentRoundStatus: (message: SetStateAction<GameState>) => void;
};

export const GameContext = createContext<TGameContext>({
  playerCards: [],
  croupierCards: [],
  drawOneCard: () => {},
  message: "",
  setMessage: () => {},
  prevoiusRounds: [],
  roundWinners: [],
  currentRoundStatus: GameState.DRAW_CARDS,
  setCurrentRoundStatus: () => {},
});

export function GameContextProvider({ children, deckId }) {
  const [playerCards, setPlayerCards] = useState<DrawedCard[]>([]);
  const [croupierCards, setCroupierCards] = useState<DrawedCard[]>([]);

  const [currentRoundStatus, setCurrentRoundStatus] = useState<GameState>(GameState.DRAW_CARDS);
  const [prevoiusRounds, setPreviousRounds] = useState<EndedRoundStatus[]>([]);

  const roundWinners: winner[] = useMemo(() => [], []);

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
    } else if (currentRoundStatus === GameState.FINISH_ROUND) {
      const gameWinner = gameContextHelpers.findWhoWonRound(
        pointsHelpers.getPointsOutcomes(playerCards, true),
        pointsHelpers.getPointsOutcomes(croupierCards, false, true)
      );

      switch (gameWinner) {
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
          setMessage("Winner not recognized");
          break;
        }
      }

      roundWinners.push(gameWinner);

      setPreviousRounds((prevRounds) => {
        return [
          ...prevRounds,
          {
            playerCards: playerCards,
            croupierCards: croupierCards,
            winner: gameWinner,
            amountWon: 0,
          },
        ];
      });
    }
  }, [playerCards, croupierCards, currentRoundStatus, deckId, setCurrentRoundStatus, roundWinners]);

  const gameContextValue = {
    playerCards,
    croupierCards,
    drawOneCard,
    message,
    setMessage,
    prevoiusRounds,
    roundWinners,
    currentRoundStatus,
    setCurrentRoundStatus,
  };

  return <GameContext.Provider value={gameContextValue}>{children}</GameContext.Provider>;
}
