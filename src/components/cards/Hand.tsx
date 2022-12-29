import React, { useContext } from "react";

import { DrawedCard } from "../../types/global";
import { HandContainer, StyledCard } from "./CardElements";
import ReversableCard from "./ReversableCard";
import { GameContext } from "../../context/GameContext";

export default function Hand({ player = false }) {
  const gameContext = useContext(GameContext);

  let cards: DrawedCard[];

  if (player) {
    cards = gameContext.playerCards;
  } else {
    cards = gameContext.croupierCards;
  }

  const reversedCards: JSX.Element[] = cards.map((card, index) => {
    return <StyledCard key={index} image={card.image} />;
  });

  return (
    <HandContainer>
      {!player && cards.length <= 2 ? (
        <>
          <StyledCard image={cards[0].image} />
          <ReversableCard
            aversImage={cards[1].image}
            isReversed={gameContext.isCroupierCardReversed}
          />
        </>
      ) : (
        reversedCards
      )}
    </HandContainer>
  );
}
