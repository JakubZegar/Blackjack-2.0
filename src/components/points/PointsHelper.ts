import { rules } from "../../const/rules";
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

export const getPointsFromCard = (card: DrawedCard) => {
  let [points, alternativePoints] = [0, 0];

  if (card.value === CardNames.ACE) {
    points = 1;
    alternativePoints = 11;
  } else if (card.value === CardNames.JACK || card.value === CardNames.QUEEN || card.value === CardNames.KING) {
    points = 10;
    alternativePoints = 10;
  } else {
    if (isNaN(parseInt(card.value)) || parseInt(card.value) < 2) {
      points = 0;
      alternativePoints = 0;
    } else {
      points = parseInt(card.value);
      alternativePoints = parseInt(card.value);
    }
  }

  return {
    main: points,
    alternative: alternativePoints,
  };
};

const getPointsOutcomes = (cards: DrawedCard[], player: boolean, isCroupierCardReversed = false) => {
  let cardValues: TCountPoints;
  let [sumPoints, sumAlternativePoints] = [0, 0];

  if (isCroupierCardReversed || player ) {
    cards.forEach((card) => {
      cardValues = getPointsFromCard(card);

      if (card.value === "ACE" && sumPoints !== sumAlternativePoints) {
        sumPoints += cardValues.main;
        sumAlternativePoints += cardValues.main;
      } else {
        sumPoints += cardValues.main;
        sumAlternativePoints += cardValues.alternative;
      }
    });
  } else {
    cardValues = getPointsFromCard(cards[0]);
    sumPoints += cardValues.main;
    sumAlternativePoints += cardValues.alternative;
  }

  return sumAlternativePoints > 0 && sumAlternativePoints <= rules.BLACKJACK ? sumAlternativePoints : sumPoints;
};

const pointsHelpers = {
  getPointsOutcomes: getPointsOutcomes,
};

export default pointsHelpers;
