import React, { useState, useEffect } from 'react';

import { PointsWrapper } from '../points/PointsElements';

import { DrawedCard } from '../../types/global';
import pointsHelpers from './PointsHelper';

type Props = {
  cards: DrawedCard[];
  player?: boolean;
  isCroupierCardReversed?: boolean;
};

function Points({ cards, player = false, isCroupierCardReversed = false }: Props) {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    if (cards.length > 0) {
      let [sumPoints, sumAlternativePoints]: Array<number> = pointsHelpers.getPointsOutcomes(cards, player, isCroupierCardReversed);

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
