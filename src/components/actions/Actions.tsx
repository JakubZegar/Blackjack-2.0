import React, { useContext } from "react";

import { ActionContainer } from "./ActionsElements";
import { Button } from "../general/Button";

import { GameContext } from "../../context/GameContext";

export default function Actions() {
  const gameContext = useContext(GameContext);
  return (
    <ActionContainer>
      <Button isEnabled={true} onClick={gameContext.drawOneCard}>
        Draw
      </Button>
      <Button isEnabled={true}>Double</Button>
      <Button isEnabled={true} onClick={gameContext.passRound}>
        Pass
      </Button>
      <Button isEnabled={true} onClick={gameContext.shuffleDeck}>
        RESET
      </Button>
    </ActionContainer>
  );
}
