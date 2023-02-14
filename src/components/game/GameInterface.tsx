import React from "react";

import Actions from "../actions/Actions";
import RoundHistory from "../roundHistory/RoundHistory";
import { GameContainer, MiddleContainer, PlayerSection, SideContainer } from "./GameElements";
import { Preloader } from "../general/Preloader";
import PlayerPoints from "../points/PlayerPoints/PlayerPoints";
import CroupierPoints from "../points/CroupierPoints/CroupierPoints";
import CroupierHand from "../cards/CroupierHand";
import PlayerHand from "../cards/PlayerHand";

import useGameContext from "../../hooks/useGameContext";
import { MessageWrapper } from "../points/PointsElements";
import Bets from "../bets/Bets";

export default function GameInterface() {
  const { playerCards, message } = useGameContext();

  if (!playerCards.length) {
    return <Preloader />;
  }

  return (
    <GameContainer>
      <SideContainer>
        <Bets />
      </SideContainer>

      <MiddleContainer>
        <PlayerSection>
          <CroupierHand />
          <CroupierPoints />
        </PlayerSection>

        <Actions />

        <MessageWrapper>{message}</MessageWrapper>

        <PlayerSection>
          <PlayerPoints />
          <PlayerHand />
        </PlayerSection>
      </MiddleContainer>

      <SideContainer>
        <RoundHistory></RoundHistory>
      </SideContainer>
    </GameContainer>
  );
}
