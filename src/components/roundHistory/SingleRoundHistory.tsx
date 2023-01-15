import React from "react";
import { EndedRoundStatus } from "../../types/global";
import { SmallCardContainer, HisotryCardsLabel, SmallCard } from "./RoundHisotryElements";

type Props = {
  roundInfo: EndedRoundStatus;
  roundIndex: number;
};

export default function SingleRoundHistory({ roundInfo, roundIndex }: Props) {
  const roundPlayerCards = roundInfo.playerCards.map((card, cardIndex) => {
    return <SmallCard key={cardIndex} src={card.image}></SmallCard>;
  });

  const roundcroupierCards = roundInfo.croupierCards.map((card, cardIndex) => {
    return <SmallCard key={cardIndex} src={card.image}></SmallCard>;
  });

  return (
    <>
      <SmallCardContainer key={roundIndex}>
        <HisotryCardsLabel>P</HisotryCardsLabel>
        {roundPlayerCards}
      </SmallCardContainer>

      <SmallCardContainer key={roundIndex}>
        <HisotryCardsLabel>C</HisotryCardsLabel>
        {roundcroupierCards}
      </SmallCardContainer>
    </>
  );
}
