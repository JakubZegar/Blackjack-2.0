import React from "react";

import { ActionContainer } from "./ActionsElements";
import { Button } from "../general/Button";

import useGameContext from "../../hooks/useGameContext";

export default function Actions() {
  const { drawOneCard, setRoundEnded, roundEnded, resetRound } = useGameContext();

  return (
    <ActionContainer>
      <Button disabled={roundEnded.player} onClick={drawOneCard}>
        Draw
      </Button>
      {/* <Button disabled={playerCards.length !== 2}>Double</Button> */}
      <Button disabled={roundEnded.player} onClick={() => setRoundEnded({ player: true, croupier: false })}>
        Pass
      </Button>
      <Button disabled={!roundEnded.player} onClick={resetRound}>
        Reset
      </Button>
    </ActionContainer>
  );
}
