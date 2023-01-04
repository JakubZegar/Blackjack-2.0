import React, { useEffect } from "react";

import { PointsWrapper } from "../points/PointsElements";

import pointsHelpers from "./PointsHelper";

import useGameContext from "../../hooks/useGameContext";

function Points({ player = false }) {
  const {
    playerCards,
    croupierCards,
    isCroupierCardReversed,
    setMessage,
    setRoundEnded,
    points,
    setPoints,
    passRound,
  } = useGameContext();

  useEffect(() => {
    if ((player && playerCards.length) || (!player && croupierCards.length)) {
      player
        ? setPoints((prevPoints) => {
            return {
              ...prevPoints,
              playerPoints: pointsHelpers.getPointsOutcomes(playerCards, player, isCroupierCardReversed),
            };
          })
        : setPoints((prevPoints) => {
            return {
              ...prevPoints,
              croupierPoints: pointsHelpers.getPointsOutcomes(croupierCards, player, isCroupierCardReversed),
            };
          });
    }
  }, [playerCards, croupierCards, isCroupierCardReversed, player, setPoints]);

  useEffect(() => {
    if (player) {
      if (points.playerPoints === 21) {
        setMessage("Blackjack!");
        setRoundEnded((prevRoundStatus) => {
          return {
            ...prevRoundStatus,
            player: true,
          };
        });
        passRound();
      } else if (points.playerPoints > 21) {
        setMessage("You've lost");
        setRoundEnded({
          croupier: true,
          player: true,
        });
      }
    } else {
      if (points.croupierPoints > 16) {
        setRoundEnded({
          croupier: true,
          player: true,
        });
      }
    }
  }, [player, setMessage, setRoundEnded, points.playerPoints, points.croupierPoints, passRound]);

  return <PointsWrapper>{player ? points.playerPoints : points.croupierPoints}</PointsWrapper>;
}

export default Points;
