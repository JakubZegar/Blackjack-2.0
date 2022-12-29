import React from "react";

import Actions from "../actions/Actions";
import { GameContainer, MiddleContainer, PlayerSection, SideContainer } from "./GameElements";
import { Preloader } from "../general/Preloader";
import Points from "../points/Points";
import Hand from "../cards/Hand";

import useGameContext from "../../hooks/useGameContext";

export default function GameInterface() {
  const { playerCards } = useGameContext();

  if (!playerCards.length) {
    return <Preloader />;
  }

  return (
    <GameContainer>
      <SideContainer></SideContainer>

      <MiddleContainer>
        <PlayerSection>
          <Hand />
          <Points />
        </PlayerSection>

        <Actions />

        <PlayerSection>
          <Points player={true} />
          <Hand player={true} />
        </PlayerSection>
      </MiddleContainer>

      <SideContainer></SideContainer>
    </GameContainer>
  );
}
