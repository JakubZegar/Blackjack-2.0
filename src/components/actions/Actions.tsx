import React from "react";

import { ActionContainer } from "./ActionsElements";
import { Button } from "../general/Button";

import useGameContext from "../../hooks/useGameContext";
import { GameState } from "../../const/gameState";

export default function Actions() {
  const { drawOneCard, setCurrentRoundStatus, currentRoundStatus, setMessage } = useGameContext();

  const resetRound = () => {
    setCurrentRoundStatus(GameState.DRAW_CARDS);
    setMessage("Your turn");
  };

  return (
    <ActionContainer>
      <Button disabled={currentRoundStatus !== GameState.PLAYER_ROUND} onClick={() => drawOneCard()}>
        Draw
      </Button>
      <Button
        disabled={currentRoundStatus !== GameState.PLAYER_ROUND}
        onClick={() => setCurrentRoundStatus(GameState.CROUPIER_ROUND)}
      >
        Pass
      </Button>
      <Button disabled={false} onClick={resetRound}>
        Reset
      </Button>
    </ActionContainer>
  );
}
