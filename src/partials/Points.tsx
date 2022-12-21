import React, { useState, useEffect, useCallback } from 'react';
import { PointsWrapper } from './components/GameElements';

import { PointsType, DrawCardResponse, DrawedCard } from '../types/global';

type Props = {
  cards: DrawedCard[];
  player?: boolean;
  isCroupierCardReversed?: boolean;
  setPointMethod: (points: number) => void;
};

type TCountPoints = Array<number>;

// NOTE wewnętrzny stan i setPointMethod, jaka logika?
function Points({ cards, player = false, isCroupierCardReversed = false, setPointMethod }: Props) {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    console.log('Points renders');
  });

  //NOTE Można ją wynieść poza komponent. Można by rozważyć czy tu nie powinna trafić gotowa wartość
  const countPoints = useCallback((card: DrawedCard) => {
    let [points, alternativePoints] = [0, 0];

    if (card.value === 'ACE') {
      points = 1;
      alternativePoints = 11;
    } else if (card.value === 'QUEEN' || card.value === 'JACK' || card.value === 'KING') {
      points = 10;
      alternativePoints = 10;
    } else {
      points = parseInt(card.value);
      alternativePoints = parseInt(card.value);
    }

    return [points, alternativePoints];
  }, []);

  useEffect(() => {
    if (cards.length > 0) {
      //NOTE Duże to - wywalić do funkcji
      let [sumPoints, sumAlternativePoints]: [number, number] = [0, 0];

      let cardValues: TCountPoints;
      if (isCroupierCardReversed === true || player === true) {
        //NOTE dlaczego tu jest map? To jakiś reset?
        cards.map((card: DrawedCard) => {
          cardValues = countPoints(card);
          sumPoints += cardValues[0];
          sumAlternativePoints += cardValues[1];
          return null;
        });
      } else {
        cardValues = countPoints(cards[0]);
        sumPoints += cardValues[0];
        sumAlternativePoints += cardValues[1];
      }

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
  }, [cards, isCroupierCardReversed, player, countPoints]);

  useEffect(() => {
    if (points !== 0) {
      setPointMethod(points);
    }
  }, [points, setPointMethod]);

  return <PointsWrapper>{points}</PointsWrapper>;
}

export default Points;
