import React from "react";

import { ActionContainer } from "./ActionsElements";
import { Button } from "../general/Button";

import useGameContext from "../../hooks/useGameContext";

export default function Actions() {
  const { drawOneCard, passRound, roundEnded, resetRound } = useGameContext();

  return (
    <ActionContainer>
      <Button disabled={roundEnded.player} onClick={drawOneCard}>
        Draw
      </Button>
      {/* <Button disabled={playerCards.length !== 2}>Double</Button> */}
      <Button disabled={roundEnded.player} onClick={passRound}>
        Pass
      </Button>
      <Button disabled={false} onClick={resetRound}>
        Reset
      </Button>
    </ActionContainer>
  );
}
