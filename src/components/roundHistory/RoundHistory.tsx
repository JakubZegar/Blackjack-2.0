import React from "react";

import { RoundHistoryContiner, RoundStatusLabel } from "./RoundHisotryElements";

import useGameContext from "../../hooks/useGameContext";
import SingleRoundHistory from "./SingleRoundHistory";

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

            <SingleRoundHistory roundInfo={prevRound} roundIndex={roundIndex}></SingleRoundHistory>
            <SingleRoundHistory roundInfo={prevRound} roundIndex={roundIndex} player={false}></SingleRoundHistory>
          </>
        );
      })}
    </RoundHistoryContiner>
  );
}
