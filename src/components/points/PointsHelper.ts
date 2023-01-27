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
    if (isNaN(parseInt(card.value))) {
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

export const evaluatePointsForAllCards = (cards: DrawedCard[]) => {
  let cardValues: TCountPoints;
  let [sumPoints, sumAlternativePoints] = [0, 0];

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

  return sumAlternativePoints > 0 && sumAlternativePoints <= rules.BLACKJACK ? sumAlternativePoints : sumPoints;
};

const getCroupierPoints = (croupierCards: DrawedCard[], isCroupierCardReversed = false) => {
  if (isCroupierCardReversed) {
    return evaluatePointsForAllCards(croupierCards);
  } else {
    let cardValues = getPointsFromCard(croupierCards[0]);
    return cardValues.alternative > 0 && cardValues.alternative <= rules.BLACKJACK
      ? cardValues.alternative
      : cardValues.main;
  }
};

const pointsHelpers = {
  getCroupierPoints: getCroupierPoints,
  getPlayerPoints: evaluatePointsForAllCards,
};

export default pointsHelpers;
