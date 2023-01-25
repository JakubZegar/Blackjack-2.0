import React, { useEffect } from "react";

import { PointsWrapper } from "./PointsElements";

import pointsHelpers from "./PointsHelper";

import useGameContext from "../../hooks/useGameContext";
import { rules } from "../../const/rules";
import { GameState } from "../../const/gameState";

function PlayerPoints() {
  const { playerCards, setMessage, setCurrentRoundStatus } = useGameContext();

  useEffect(() => {
    if (!playerCards.length) {
      return;
    }

    if (pointsHelpers.getPointsOutcomes(playerCards, true) === rules.BLACKJACK) {
      setMessage("Blackjack!");
      setCurrentRoundStatus(GameState.CROUPIER_ROUND);
    } else if (pointsHelpers.getPointsOutcomes(playerCards, true) > rules.BLACKJACK) {
      setMessage("You've lost");
      setCurrentRoundStatus(GameState.FINISH_ROUND);
    }
  }, [setCurrentRoundStatus, playerCards, setMessage]);

  return <PointsWrapper>{pointsHelpers.getPointsOutcomes(playerCards, true)}</PointsWrapper>;
}

export default PlayerPoints;
