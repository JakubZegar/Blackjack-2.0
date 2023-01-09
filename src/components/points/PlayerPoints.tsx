import React, { useEffect } from "react";

import { PointsWrapper } from "./PointsElements";

import pointsHelpers from "./PointsHelper";

import useGameContext from "../../hooks/useGameContext";
import { rules } from "../../const/rules";

function PlayerPoints() {
  const {
    playerCards,
    setMessage,
    points,
    setPoints,
    setRoundEnded,
  } = useGameContext();

  useEffect(() => {
    if (!playerCards.length) {
      return;
    }

    let newPlayerPoints = pointsHelpers.getPointsOutcomes(playerCards, true)

    setPoints((prevPoints) => {
      return {
        ...prevPoints,
        playerPoints: newPlayerPoints,
      };
    })    

    if (newPlayerPoints === rules.BLACKJACK) {
      setMessage("Blackjack!");
      setRoundEnded({player:true, croupier: false})
    } else if (newPlayerPoints > rules.BLACKJACK) {
      setMessage("You've lost");
      setRoundEnded({player:true, croupier: true})
    }

  }, [setRoundEnded, playerCards, setMessage, setPoints]);


  return <PointsWrapper>{points.playerPoints}</PointsWrapper>;
}

export default PlayerPoints;
