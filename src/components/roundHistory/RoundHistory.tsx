import React from "react";

import { RoundHistoryContiner, RoundStatusLabel } from "./RoundHisotryElements";

import useGameContext from "../../hooks/useGameContext";
import SingleRoundHistory from "./SingleRoundHistory";

export default function RoundHistory() {
  const { prevoiusRounds, roundWinners } = useGameContext();

  if (prevoiusRounds.length === 0) {
    return null;
  }

  return (
    <RoundHistoryContiner>
      {prevoiusRounds.map((prevRound, roundIndex) => {
        return (
          <React.Fragment key={roundIndex}>
            <RoundStatusLabel>
              Round {roundIndex + 1} - Winner: {roundWinners[roundIndex]}
            </RoundStatusLabel>

            <SingleRoundHistory roundInfo={prevRound}></SingleRoundHistory>
          </React.Fragment>
        );
      })}
    </RoundHistoryContiner>
  );
}
