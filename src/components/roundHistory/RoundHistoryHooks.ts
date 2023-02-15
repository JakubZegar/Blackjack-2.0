import { useEffect, useState } from "react";
import { GameState } from "../../const/gameState";
import { winner } from "../../const/gameWinner";
import gameContextHelpers from "../../context/GameContextHelper";
import useGameContext from "../../hooks/useGameContext";
import { EndedRoundStatus } from "../../types/global";
import pointsHelpers from "../points/PointsHelper";

export const useRoundHistory = () => {
  const [previousRoundsDetails, setPreviousRoundsDetails] = useState<EndedRoundStatus[]>([]);
  const [roundWinners, setRoundWinners] = useState<string[]>([]);

  const { playerCards, croupierCards, setMessage, currentRoundStatus, getRoundWinner } = useGameContext();

  useEffect(() => {
    if (currentRoundStatus === GameState.FINISH_ROUND) {
      const gameWinner = getRoundWinner();

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

      setRoundWinners((prevWinners) => {
        return [...prevWinners, gameWinner];
      });

      setPreviousRoundsDetails((prevRounds) => {
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
  }, [playerCards, croupierCards, currentRoundStatus, setMessage]);

  return [previousRoundsDetails, roundWinners];
};
