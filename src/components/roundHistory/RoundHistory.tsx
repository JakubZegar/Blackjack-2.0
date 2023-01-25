import React from "react";

import useGameContext from "../../hooks/useGameContext";
import {
  HisotryCardsLabel,
  RoundHistoryContiner,
  RoundStatusLabel,
  SmallCard,
  SmallCardContainer,
} from "./RoundHisotryElements";

export default function RoundHistory() {
  const { prevoiusRounds } = useGameContext();

  if (prevoiusRounds.length === 0) {
    return null;
  }

  return (
    <RoundHistoryContiner>
      {prevoiusRounds.map((prevRound, roundIndex) => {
        return (
          <React.Fragment key={roundIndex}>
            <RoundStatusLabel>
              Round {roundIndex + 1} - Winner: {prevRound.winner} ({prevRound.amountWon} points)
            </RoundStatusLabel>
            <SmallCardContainer>
              <HisotryCardsLabel>P</HisotryCardsLabel>
              {prevRound.playerCards.map((card) => {
                return <SmallCard key={card.cardIndex} src={card.image}></SmallCard>;
              })}
            </SmallCardContainer>

            <SmallCardContainer>
              <HisotryCardsLabel>C</HisotryCardsLabel>
              {prevRound.croupierCards.map((card) => {
                return <SmallCard key={card.cardIndex} src={card.image}></SmallCard>;
              })}
            </SmallCardContainer>
          </React.Fragment>
        );
      })}
    </RoundHistoryContiner>
  );
}
