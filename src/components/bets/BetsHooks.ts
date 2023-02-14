import { useEffect, useState } from "react";
import { GameState } from "../../const/gameState";
import { winner } from "../../const/gameWinner";
import { rules } from "../../const/rules";
import gameContextHelpers from "../../context/GameContextHelper";
import useGameContext from "../../hooks/useGameContext";
import pointsHelpers from "../points/PointsHelper";

export const useBets = () => {
    const [balance, setBalance] = useState(1000);
    const [currentBet, setCurrentBet] = useState(0);

    const { currentRoundStatus, playerCards, croupierCards } = useGameContext();

    const resetCurrentBet = () => {
        setCurrentBet(0);
    }

    const placeBet = (coinValue: number) => {
        if(balance - coinValue >= 0) {
            setBalance((prevBalance) => (prevBalance - coinValue))
            setCurrentBet((prevBet) => (prevBet + coinValue))
        }
    }

    useEffect(() => {
        if(currentRoundStatus === GameState.PLACING_BET){
            resetCurrentBet();
        } else if (currentRoundStatus === GameState.FINISH_ROUND) {
            const gameWinner = gameContextHelpers.findWhoWonRound(
                pointsHelpers.getPlayerPoints(playerCards),
                pointsHelpers.getCroupierPoints(croupierCards, true)
            );
            
            switch (gameWinner) {
                case winner.PLAYER: {
                    setBalance((prevBalance) => (prevBalance + (currentBet * rules.WIN_MULTIPLER)));
                    resetCurrentBet();
                    break;
                }
                case winner.CROUPIER: {
                    resetCurrentBet();
                    break;
                }
                case winner.DRAW: {
                    setBalance((prevBalance) => (prevBalance + currentBet));
                    resetCurrentBet();
                    break;
                }
                default: {
                    setBalance((prevBalance) => (prevBalance + currentBet));
                    resetCurrentBet();
                    break;
                }
            }
        }
    }, [croupierCards, currentBet, currentRoundStatus, playerCards])

    return {balance, currentBet, resetCurrentBet, placeBet};
}