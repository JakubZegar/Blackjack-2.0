import React from "react";

import { HandContainer, StyledCard } from "./CardElements";

import useGameContext from "../../hooks/useGameContext";

export default function PlayerHand() {
  const { playerCards } = useGameContext();

  const reversedCards = playerCards.map((card) => {
    return <StyledCard key={card.cardId} image={card.image} />;
  });

  return <HandContainer>{reversedCards}</HandContainer>;
}
