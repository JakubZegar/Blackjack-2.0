import React from "react";

import { RoundHistoryContiner, RoundStatusLabel } from "./RoundHisotryElements";

import SingleRoundHistory from "./SingleRoundHistory";
import { useRoundHistory } from "./RoundHistoryHooks";

export default function RoundHistory() {
  const [previousRoundsDetails, roundWinners] = useRoundHistory();

  if (previousRoundsDetails.length === 0) {
    return null;
  }

  return (
    <RoundHistoryContiner>
      {previousRoundsDetails.map((prevRound, roundIndex) => {
        return (
          <div data-testid='historyElement' key={roundIndex}>
            <RoundStatusLabel>
              Round {roundIndex + 1} - Winner: {roundWinners[roundIndex]}
            </RoundStatusLabel>

            <SingleRoundHistory roundInfo={prevRound}></SingleRoundHistory>
          </div>
        );
      })}
    </RoundHistoryContiner>
  );
}
