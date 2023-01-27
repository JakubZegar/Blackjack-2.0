import React from "react";
import { EndedRoundStatus } from "../../types/global";
import { SmallCardContainer, HisotryCardsLabel, SmallCard } from "./RoundHisotryElements";

type Props = {
  roundInfo: EndedRoundStatus;
};

export default function SingleRoundHistory({ roundInfo }: Props) {
  const roundPlayerCards = roundInfo.playerCards.map((card) => {
    return <SmallCard key={card.cardId} src={card.image}></SmallCard>;
  });

  const roundcroupierCards = roundInfo.croupierCards.map((card) => {
    return <SmallCard key={card.cardId} src={card.image}></SmallCard>;
  });

  return (
    <>
      <SmallCardContainer>
        <HisotryCardsLabel>P</HisotryCardsLabel>
        {roundPlayerCards}
      </SmallCardContainer>

      <SmallCardContainer>
        <HisotryCardsLabel>C</HisotryCardsLabel>
        {roundcroupierCards}
      </SmallCardContainer>
    </>
  );
}
