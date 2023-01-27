import React from "react";

import { HandContainer, StyledCard } from "./CardElements";
import ReversableCard from "./ReversableCard";

import useGameContext from "../../hooks/useGameContext";

import pointsHelpers from "../points/PointsHelper";

import { rules } from "../../const/rules";
import { GameState } from "../../const/gameState";

export default function CroupierHand() {
  const { croupierCards, currentRoundStatus, playerCards } = useGameContext();

  const reversedCards = croupierCards.map((card) => {
    return <StyledCard key={card.cardId} image={card.image} />;
  });

  let isSecondCardReversed =
    currentRoundStatus !== GameState.PLAYER_ROUND && pointsHelpers.getPlayerPoints(playerCards) <= rules.BLACKJACK;

  return (
    <HandContainer>
      {croupierCards.length <= 2 ? (
        <>
          <StyledCard image={croupierCards[0].image} />
          <ReversableCard aversImage={croupierCards[1].image} isReversed={isSecondCardReversed} />
        </>
      ) : (
        reversedCards
      )}
    </HandContainer>
  );
}
