import React, { useState } from "react";

import { DrawedCard } from "../../types/global";
import { winner } from "../../const/gameWinner";
import useGameContext from "../../hooks/useGameContext";
import {
  HisotryCardsLabel,
  RoundHistoryContiner,
  RoundStatusLabel,
  SmallCard,
  SmallCardContainer,
} from "./RoundHisotryElements";

type EndedRoundStatus = {
  playerCards: DrawedCard[];
  croupierCards: DrawedCard[];
  winner: winner.PLAYER | winner.CROUPIER | winner.DRAW;
  amountWon: number;
};

export default function RoundHistory() {
  const { prevoiusRounds } = useGameContext();

  if (prevoiusRounds.length === 0) {
    return null;
  }

  return (
    <RoundHistoryContiner>
      {prevoiusRounds.map((prevRound, roundIndex) => {
        return (
          <>
            <RoundStatusLabel>
              Round {roundIndex + 1} - Winner: {prevRound.winner} ({prevRound.amountWon} points)
            </RoundStatusLabel>
            <SmallCardContainer key={roundIndex}>
              <HisotryCardsLabel>P</HisotryCardsLabel>
              {prevRound.playerCards.map((card, cardIndex) => {
                return <SmallCard key={cardIndex} src={card.image}></SmallCard>;
              })}
            </SmallCardContainer>

            <SmallCardContainer>
              <HisotryCardsLabel>C</HisotryCardsLabel>
              {prevRound.croupierCards.map((card, cardIndex) => {
                return <SmallCard key={cardIndex} src={card.image}></SmallCard>;
              })}
            </SmallCardContainer>
          </>
        );
      })}
    </RoundHistoryContiner>
  );
}
