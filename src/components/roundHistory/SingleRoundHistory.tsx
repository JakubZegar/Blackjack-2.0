import React from "react";
import { EndedRoundStatus } from "../../types/global";
import { SmallCardContainer, HisotryCardsLabel, SmallCard } from "./RoundHisotryElements";

type Props = {
  roundInfo: EndedRoundStatus;
  roundIndex: number;
  player?: boolean;
};

export default function SingleRoundHistory({ roundInfo, roundIndex, player = true }: Props) {
  const roundCards = roundInfo.playerCards.map((card, cardIndex) => {
    return <SmallCard key={cardIndex} src={card.image}></SmallCard>;
  });

  const whoseCards = player ? "P" : "C";

  return (
    <SmallCardContainer key={roundIndex}>
      <HisotryCardsLabel>{whoseCards}</HisotryCardsLabel>
      {roundCards}
    </SmallCardContainer>
  );
}
