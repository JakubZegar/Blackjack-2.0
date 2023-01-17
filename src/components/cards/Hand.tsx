import React from "react";

import { DrawedCard } from "../../types/global";
import { HandContainer, StyledCard } from "./CardElements";
import ReversableCard from "./ReversableCard";

import useGameContext from "../../hooks/useGameContext";
import { rules } from "../../const/rules";

export default function Hand({ player = false }) {
  const { playerCards, croupierCards, roundEnded, points } = useGameContext();

  let cards: DrawedCard[];

  if (player) {
    cards = playerCards;
  } else {
    cards = croupierCards;
  }

  const reversedCards = cards.map((card, index) => {
    return <StyledCard key={index} image={card.image} />;
  });

  return (
    <HandContainer>
      {!player && cards.length <= 2 ? (
        <>
          <StyledCard image={cards[0].image} />
          <ReversableCard aversImage={cards[1].image} isReversed={roundEnded.player && points.playerPoints <= rules.BLACKJACK } />
        </>
      ) : (
        reversedCards
      )}
    </HandContainer>
  );
}
