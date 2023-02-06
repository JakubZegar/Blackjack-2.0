import { useEffect } from "react";

import { GameState } from "../../../const/gameState";

import { rules } from "../../../const/rules";
import { TGameContext } from "../../../types/global";

import pointsHelpers from "../PointsHelper";

type Props = Omit<TGameContext, "message" | "setMessage">;

export const useCroupierPoints = ({
  croupierCards,
  currentRoundStatus,
  drawOneCard,
  setCurrentRoundStatus,
  playerCards,
}: Props) => {
  useEffect(() => {
    if (!croupierCards.length) {
      return;
    }

    let newCroupierPoints = pointsHelpers.getCroupierPoints(
      croupierCards,
      currentRoundStatus !== GameState.PLAYER_ROUND && pointsHelpers.getPlayerPoints(playerCards) <= rules.BLACKJACK
    );

    if (currentRoundStatus === GameState.CROUPIER_ROUND && newCroupierPoints < rules.CROUPIERSTOP) {
      setTimeout(() => {
        drawOneCard(false);
      }, 1000);
    } else if (currentRoundStatus === GameState.CROUPIER_ROUND) {
      setCurrentRoundStatus(GameState.FINISH_ROUND);
    }
  }, [croupierCards, drawOneCard, setCurrentRoundStatus, currentRoundStatus, playerCards]);
};
