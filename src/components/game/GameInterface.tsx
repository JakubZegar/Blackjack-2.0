import React, { useContext } from "react";

import Actions from "../actions/Actions";
import {
  GameContainer,
  MiddleContainer,
  PlayerSection,
  SideContainer,
} from "./GameElements";
import { Preloader } from "../general/Preloader";
import Points from "../points/Points";
import Hand from "../cards/Hand";

import { GameContext } from "../../context/GameContext";

export default function GameInterface() {
  const playerCards = useContext(GameContext).playerCards;

  if (playerCards.length <= 0) {
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
