import React, { useContext } from "react";

import { DrawedCard } from "../../types/global";
import { HandContainer, StyledCard } from "./CardElements";
import ReversableCard from "./ReversableCard";

import useGameContext from "../../hooks/useGameContext";

export default function Hand({ player = false }) {
  const { playerCards, croupierCards, isCroupierCardReversed } = useGameContext();

  let cards: DrawedCard[];

  if (player) {
    cards = playerCards;
  } else {
    cards = croupierCards;
  }

  const reversedCards: JSX.Element[] = cards.map((card, index) => {
    return <StyledCard key={index} image={card.image} />;
  });

  return (
    <HandContainer>
      {!player && cards.length <= 2 ? (
        <>
          <StyledCard image={cards[0].image} />
          <ReversableCard aversImage={cards[1].image} isReversed={isCroupierCardReversed} />
        </>
      ) : (
        reversedCards
      )}
    </HandContainer>
  );
}
