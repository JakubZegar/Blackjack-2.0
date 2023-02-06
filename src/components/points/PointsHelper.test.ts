import pointsHelpers, { getPointsFromCard } from "./PointsHelper";
import { DrawedCard } from "../../types/global";

const player = true;
const croupier = false;
const croupierCardReversed = true;
const croupierCardNotReversed = false;

test("should get 1 or 11 points from ace", () => {
  const aceOfHearts = {
    image: "https://deckofcardsapi.com/static/img/AH.png",
    value: "ACE",
    cardId: 1,
  };

  expect(getPointsFromCard(aceOfHearts)).toStrictEqual({
    alternative: 11,
    main: 1,
  });
});

test("should get 10 points from queen", () => {
  const queenOfDiamonds = {
    image: "https://deckofcardsapi.com/static/img/QD.png",
    value: "QUEEN",
    cardId: 1,
  };

  expect(getPointsFromCard(queenOfDiamonds)).toStrictEqual({
    alternative: 10,
    main: 10,
  });
});

test("should get 10 points from king", () => {
  const kingOfHearts = {
    image: "https://deckofcardsapi.com/static/img/KH.png",
    value: "KING",
    cardId: 1,
  };
  expect(getPointsFromCard(kingOfHearts)).toStrictEqual({
    alternative: 10,
    main: 10,
  });
});

test("should get 10 points from jack", () => {
  const jackOfSpades = {
    image: "https://deckofcardsapi.com/static/img/JS.png",
    value: "JACK",
    cardId: 1,
  };
  expect(getPointsFromCard(jackOfSpades)).toStrictEqual({
    alternative: 10,
    main: 10,
  });
});

test("should get 7 points from seven", () => {
  const sevenOfClubs = {
    image: "https://deckofcardsapi.com/static/img/7C.png",
    value: "7",
    cardId: 1,
  };
  expect(getPointsFromCard(sevenOfClubs)).toStrictEqual({
    alternative: 7,
    main: 7,
  });
});

test("should get 0 points from other cards", () => {
  const joker = {
    image: "https://deckofcardsapi.com/static/img/7C.png",
    value: "JOKER",
    cardId: 1,
  };
  expect(getPointsFromCard(joker)).toStrictEqual({
    alternative: 0,
    main: 0,
  });
});

test("should count player points with two cards", () => {
  const cards = [
    {
      image: "https://deckofcardsapi.com/static/img/2S.png",
      value: "2",
      cardId: 1,
    },
    {
      image: "https://deckofcardsapi.com/static/img/9H.png",
      value: "9",
      cardId: 2,
    },
  ];
  expect(pointsHelpers.getPlayerPoints(cards)).toBe(11);
});

test("should count only first corupier card when the other is not reversed", () => {
  const cards = [
    {
      image: "https://deckofcardsapi.com/static/img/2S.png",
      value: "2",
      cardId: 1,
    },
    {
      image: "https://deckofcardsapi.com/static/img/9H.png",
      value: "9",
      cardId: 2,
    },
  ];
  expect(pointsHelpers.getCroupierPoints(cards, croupierCardNotReversed)).toBe(2);
});

test("should count all corupier card when the other is reversed", () => {
  const cards = [
    {
      image: "https://deckofcardsapi.com/static/img/2S.png",
      value: "2",
      cardId: 1,
    },
    {
      image: "https://deckofcardsapi.com/static/img/9H.png",
      value: "9",
      cardId: 2,
    },
  ];
  expect(pointsHelpers.getPlayerPoints(cards)).toBe(11);
});

test("should count one ace when second is not reversed", () => {
  const cards = [
    {
      image: "https://deckofcardsapi.com/static/img/AS.png",
      value: "ACE",
      cardId: 1,
    },
    {
      image: "https://deckofcardsapi.com/static/img/AH.png",
      value: "ACE",
      cardId: 2,
    },
  ];
  expect(pointsHelpers.getCroupierPoints(cards, croupierCardNotReversed)).toBe(11);
});

test("should count both aces when second card is reversed, but it should be 12 points", () => {
  const cards = [
    {
      image: "https://deckofcardsapi.com/static/img/AS.png",
      value: "ACE",
      cardId: 1,
    },
    {
      image: "https://deckofcardsapi.com/static/img/AH.png",
      value: "ACE",
      cardId: 2,
    },
  ];
  expect(pointsHelpers.getPlayerPoints(cards)).toBe(12);
});

test("should 11 aces give 21 points", () => {
  let cards: DrawedCard[] = [];

  for (let index = 0; index < 11; index++) {
    cards.push({
      image: "https://deckofcardsapi.com/static/img/AH.png",
      value: "ACE",
      cardId: index,
    });
  }
  expect(pointsHelpers.getPlayerPoints(cards)).toBe(21);
});

test("should 21 aces give 21 points", () => {
  let cards: DrawedCard[] = [];

  for (let index = 0; index < 21; index++) {
    cards.push({
      image: "https://deckofcardsapi.com/static/img/AH.png",
      value: "ACE",
      cardId: index,
    });
  }
  expect(pointsHelpers.getPlayerPoints(cards)).toBe(21);
});

test("should jack, queen and ace return 21", () => {
  const cards = [
    {
      image: "https://deckofcardsapi.com/static/img/AH.png",
      value: "ACE",
      cardId: 1,
    },
    {
      image: "https://deckofcardsapi.com/static/img/JH.png",
      value: "JACK",
      cardId: 2,
    },
    {
      image: "https://deckofcardsapi.com/static/img/QH.png",
      value: "QUEEN",
      cardId: 3,
    },
  ];

  expect(pointsHelpers.getPlayerPoints(cards)).toBe(21);
});

test("should 10 and ace return 21", () => {
  const cards = [
    {
      image: "https://deckofcardsapi.com/static/img/10H.png",
      value: "10",
      cardId: 1,
    },
    {
      image: "https://deckofcardsapi.com/static/img/AH.png",
      value: "ACE",
      cardId: 2,
    },
  ];

  expect(pointsHelpers.getPlayerPoints(cards)).toBe(21);
});

test("should king and two aces return 12", () => {
  const cards = [
    {
      image: "https://deckofcardsapi.com/static/img/KH.png",
      value: "KING",
      cardId: 1,
    },
    {
      image: "https://deckofcardsapi.com/static/img/AH.png",
      value: "ACE",
      cardId: 2,
    },
    {
      image: "https://deckofcardsapi.com/static/img/AH.png",
      value: "ACE",
      cardId: 3,
    },
  ];

  expect(pointsHelpers.getPlayerPoints(cards)).toBe(12);
});

test("should ace, king and ace return 12", () => {
  const cards = [
    {
      image: "https://deckofcardsapi.com/static/img/AH.png",
      value: "ACE",
      cardId: 1,
    },
    {
      image: "https://deckofcardsapi.com/static/img/KH.png",
      value: "KING",
      cardId: 2,
    },
    {
      image: "https://deckofcardsapi.com/static/img/AH.png",
      value: "ACE",
      cardId: 3,
    },
  ];

  expect(pointsHelpers.getPlayerPoints(cards)).toBe(12);
});

test("should count only first card when croupier card is not reversed, but somehow corupier has more than two cards", () => {
  const cards = [
    {
      image: "https://deckofcardsapi.com/static/img/JH.png",
      value: "JACK",
      cardId: 1,
    },
    {
      image: "https://deckofcardsapi.com/static/img/AH.png",
      value: "ACE",
      cardId: 2,
    },
    {
      image: "https://deckofcardsapi.com/static/img/QH.png",
      value: "QUEEN",
      cardId: 3,
    },
  ];

  expect(pointsHelpers.getCroupierPoints(cards, croupierCardNotReversed)).toBe(10);
});

test("should get 0 points when cards are wrong", () => {
  const cards = [
    {
      image: "https://deckofcardsapi.com/static/img/JOKER.png",
      value: "JOKER",
      cardId: 1,
    },
    {
      image: "https://deckofcardsapi.com/static/img/JOKER.png",
      value: "JOKER",
      cardId: 2,
    },
    {
      image: "https://deckofcardsapi.com/static/img/JOKER.png",
      value: "JOKER",
      cardId: 3,
    },
  ];

  expect(pointsHelpers.getPlayerPoints(cards)).toBe(0);
});
