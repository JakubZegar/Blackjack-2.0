import React from "react";

import { ActionContainer } from "./ActionsElements";
import { Button } from "../general/Button";

import useGameContext from "../../hooks/useGameContext";
import { GameState } from "../../const/gameState";

export default function Actions() {
  const { drawOneCard, setCurrentRoundStatus, currentRoundStatus } = useGameContext();

  return (
    <ActionContainer>
      <Button disabled={currentRoundStatus !== GameState.PLAYER_ROUND && currentRoundStatus !== GameState.PLACING_BET} onClick={() => drawOneCard()}>
        Draw
      </Button>
      <Button
        disabled={currentRoundStatus !== GameState.PLAYER_ROUND && currentRoundStatus !== GameState.PLACING_BET}
        onClick={() => setCurrentRoundStatus(GameState.CROUPIER_ROUND)}
      >
        Pass
      </Button>
      <Button
        disabled={currentRoundStatus === GameState.PLAYER_ROUND}
        onClick={() => setCurrentRoundStatus(GameState.PLACING_BET)}
      >
        Reset
      </Button>
    </ActionContainer>
  );
}
