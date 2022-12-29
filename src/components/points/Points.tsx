import React, { useState, useEffect } from "react";

import { PointsWrapper } from "../points/PointsElements";

import { DrawedCard } from "../../types/global";
import pointsHelpers from "./PointsHelper";

import useGameContext from "../../hooks/useGameContext";

function Points({ player = false }) {
  const { playerCards, croupierCards, isCroupierCardReversed } = useGameContext();

  const [points, setPoints] = useState(0);

  let cards: DrawedCard[];

  if (player) {
    cards = playerCards;
  } else {
    cards = croupierCards;
  }

  useEffect(() => {
    if (cards.length) {
      let [sumPoints, sumAlternativePoints] = pointsHelpers.getPointsOutcomes(cards, player, isCroupierCardReversed);

      if (sumAlternativePoints > 0 && sumAlternativePoints <= 21) {
        setPoints(() => {
          return sumAlternativePoints;
        });
      } else if (sumPoints > 0) {
        setPoints(() => {
          return sumPoints;
        });
      }
    }
  }, [cards, isCroupierCardReversed, player]);

  return <PointsWrapper>{points}</PointsWrapper>;
}

export default Points;
