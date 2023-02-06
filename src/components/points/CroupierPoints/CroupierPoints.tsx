import React from "react";

import { PointsWrapper } from "../PointsElements";

import pointsHelpers from "../PointsHelper";

import useGameContext from "../../../hooks/useGameContext";
import { rules } from "../../../const/rules";
import { GameState } from "../../../const/gameState";
import { useCroupierPoints } from "./CroupierPointsHooks";

function CroupierPoints() {
  const { croupierCards, playerCards, currentRoundStatus, setCurrentRoundStatus, drawOneCard } = useGameContext();

  useCroupierPoints({ croupierCards, currentRoundStatus, drawOneCard, setCurrentRoundStatus, playerCards });

  return (
    <PointsWrapper>
      {pointsHelpers.getCroupierPoints(
        croupierCards,
        currentRoundStatus !== GameState.PLAYER_ROUND && pointsHelpers.getPlayerPoints(playerCards) <= rules.BLACKJACK
      )}
    </PointsWrapper>
  );
}

export default CroupierPoints;
