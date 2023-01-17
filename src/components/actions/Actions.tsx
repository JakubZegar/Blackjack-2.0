import React from "react";

import { ActionContainer } from "./ActionsElements";
import { Button } from "../general/Button";

import useGameContext from "../../hooks/useGameContext";

export default function Actions() {
  const { drawOneCard, passRound, shuffleDeck } = useGameContext();
  return (
    <ActionContainer>
      <Button isEnabled={true} onClick={drawOneCard}>
        Draw
      </Button>
      <Button isEnabled={true}>Double</Button>
      <Button isEnabled={true} onClick={passRound}>
        Pass
      </Button>
      <Button isEnabled={true} onClick={shuffleDeck}>
        RESET
      </Button>
    </ActionContainer>
  );
}
