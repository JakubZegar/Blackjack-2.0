import React, { useEffect } from "react";

import { PointsWrapper } from "./PointsElements";

import pointsHelpers from "./PointsHelper";

import useGameContext from "../../hooks/useGameContext";
import { rules } from "../../const/rules";

function CroupierPoints() {
  const {
    croupierCards,
    points,
    setPoints,
    roundEnded,
    setRoundEnded,
    drawOneCard
  } = useGameContext();

  useEffect(() => {
    if (!croupierCards.length) {
      return;
    }

    let newCroupierPoints = pointsHelpers.getPointsOutcomes(croupierCards, false, roundEnded.player && points.playerPoints <= rules.BLACKJACK)
    setPoints((prevPoints) => {
        return {
            ...prevPoints,
            croupierPoints: newCroupierPoints,
        };
    });

    if(roundEnded.player && !roundEnded.croupier && newCroupierPoints < rules.CROUPIERSTOP) {
        setTimeout(() => {
            drawOneCard(false);
        }, 1000);
    } else if(roundEnded.player && !roundEnded.croupier) {
        setRoundEnded({player:true, croupier: true})
    }
    
  }, [croupierCards, drawOneCard, points.playerPoints, roundEnded, setPoints, setRoundEnded]);

  return <PointsWrapper>{points.croupierPoints}</PointsWrapper>;
}

export default CroupierPoints;
