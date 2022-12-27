import React, { useContext, useState, useEffect } from 'react';

import { PointsWrapper } from '../points/PointsElements';

import { DrawedCard } from '../../types/global';
import pointsHelpers from './PointsHelper';

import { GameContext } from '../../context/GameContext';

type Props = {
  cards: DrawedCard[];
  player?: boolean;
  isCroupierCardReversed?: boolean;
};

function Points({ player = false }: Props) {
  const gameContext = useContext(GameContext);

  const [points, setPoints] = useState(0);

  let cards: DrawedCard[];

  if(player) {
    cards = gameContext.playerCards
  } else {
    cards = gameContext.croupierCards
  }

  useEffect(() => {
    if (cards.length > 0) {
      let [sumPoints, sumAlternativePoints]: Array<number> = pointsHelpers.getPointsOutcomes(cards, player, gameContext.isCroupierCardReversed);

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
  }, [cards, gameContext.isCroupierCardReversed, player]);


  return <PointsWrapper>{points}</PointsWrapper>;
}

export default Points;
