import React from "react";

import { DrawedCard } from "../../types/global";
import { HandContainer, StyledCard } from "./CardElements";
import ReversableCard from "./ReversableCard";

import useGameContext from "../../hooks/useGameContext";

import pointsHelpers from "../points/PointsHelper";

import { rules } from "../../const/rules";
import { GameState } from "../../const/gameState";

export default function Hand({ player = false }) {
  const { playerCards, croupierCards, currentRoundStatus } = useGameContext();

  let cards: DrawedCard[];

  if (player) {
    cards = playerCards;
  } else {
    cards = croupierCards;
  }

  const reversedCards = cards.map((card) => {
    return <StyledCard key={card.cardIndex} image={card.image} />;
  });

  return (
    <HandContainer>
      {!player && cards.length <= 2 ? (
        <>
          <StyledCard image={cards[0].image} />
          <ReversableCard
            aversImage={cards[1].image}
            isReversed={
              currentRoundStatus !== GameState.PLAYER_ROUND &&
              pointsHelpers.getPointsOutcomes(playerCards, true) <= rules.BLACKJACK
            }
          />
        </>
      ) : (
        reversedCards
      )}
    </HandContainer>
  );
}
