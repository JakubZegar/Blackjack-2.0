import { DrawedCard } from "../../types/global";

type TCountPoints = {
  main: number;
  alternative: number;
};

enum CardNames {
  ACE = "ACE",
  JACK = "JACK",
  QUEEN = "QUEEN",
  KING = "KING",
}

const getPointsFromCard = (card: DrawedCard) => {
  let [points, alternativePoints] = [0, 0];

  if (card.value === CardNames.ACE) {
    points = 1;
    alternativePoints = 11;
  } else if (card.value === CardNames.JACK || card.value === CardNames.QUEEN || card.value === CardNames.KING) {
    points = 10;
    alternativePoints = 10;
  } else {
    points = parseInt(card.value);
    alternativePoints = parseInt(card.value);
  }

  return {
    main: points,
    alternative: alternativePoints,
  };
};

const getPointsOutcomes = (cards: DrawedCard[], isCroupierCardReversed: boolean, player: boolean) => {
  let cardValues: TCountPoints;
  let [sumPoints, sumAlternativePoints] = [0, 0];

  if (isCroupierCardReversed === true || player === true) {
    cards.forEach((card) => {
      cardValues = getPointsFromCard(card);
      sumPoints += cardValues.main;
      sumAlternativePoints += cardValues.alternative;
    });
  } else {
    cardValues = getPointsFromCard(cards[0]);
    sumPoints += cardValues.main;
    sumAlternativePoints += cardValues.alternative;
  }

  return [sumPoints, sumAlternativePoints];
};

const pointsHelpers = {
  getPointsOutcomes: getPointsOutcomes,
};

export default pointsHelpers;
