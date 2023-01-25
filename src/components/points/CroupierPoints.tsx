import React, { useEffect } from "react";

import { PointsWrapper } from "./PointsElements";

import pointsHelpers from "./PointsHelper";

import useGameContext from "../../hooks/useGameContext";
import { rules } from "../../const/rules";
import { GameState } from "../../const/gameState";

function CroupierPoints() {
  const { croupierCards, playerCards, currentRoundStatus, setCurrentRoundStatus, drawOneCard } = useGameContext();

  useEffect(() => {
    if (!croupierCards.length) {
      return;
    }

    let newCroupierPoints = pointsHelpers.getPointsOutcomes(
      croupierCards,
      false,
      currentRoundStatus !== GameState.PLAYER_ROUND &&
        pointsHelpers.getPointsOutcomes(playerCards, true) <= rules.BLACKJACK
    );

    if (currentRoundStatus === GameState.CROUPIER_ROUND && newCroupierPoints < rules.CROUPIERSTOP) {
      setTimeout(() => {
        drawOneCard(false);
      }, 1000);
    } else if (currentRoundStatus === GameState.CROUPIER_ROUND) {
      setCurrentRoundStatus(GameState.FINISH_ROUND);
    }
  }, [croupierCards, drawOneCard, setCurrentRoundStatus, currentRoundStatus, playerCards]);

  return (
    <PointsWrapper>
      {pointsHelpers.getPointsOutcomes(
        croupierCards,
        false,
        currentRoundStatus !== GameState.PLAYER_ROUND &&
          pointsHelpers.getPointsOutcomes(playerCards, true) <= rules.BLACKJACK
      )}
    </PointsWrapper>
  );
}

export default CroupierPoints;
