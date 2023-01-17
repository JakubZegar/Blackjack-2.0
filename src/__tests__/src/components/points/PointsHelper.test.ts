import pointsHelpers, { getPointsFromCard } from "../../../../components/points/PointsHelper";
import { DrawedCard } from "../../../../types/global";

const ace = {
    image: "",
    value: "ACE",
  },
  jack = {
    image: "",
    value: "JACK",
  },
  queen = {
    image: "",
    value: "QUEEN",
  },
  king = {
    image: "",
    value: "KING",
  };

describe("Get points from cards", () => {
  let cardArray: DrawedCard[] = [jack, queen, king];

  const cardValues = [10, 10, 10, 0, 0, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  for (let index = 0; index <= 10; index++) {
    cardArray.push({
      image: "",
      value: index.toString(),
    });
  }

  test("should get card main value from 2 to King", () => {
    expect(
      cardArray.map((card) => {
        return getPointsFromCard(card).main;
      })
    ).toStrictEqual(cardValues);
  });

  test("should get card alternative value from 2 to King", () => {
    expect(
      cardArray.map((card) => {
        return getPointsFromCard(card).alternative;
      })
    ).toStrictEqual(cardValues);
  });

  test("should get 1 or 11 points from ace", () => {
    expect(getPointsFromCard(ace)).toStrictEqual({
      alternative: 11,
      main: 1,
    });
  });
});

describe("Count points in hands", () => {
  const player = true;
  const croupier = false;
  const croupierCardReversed = true;
  const croupierCardNotReversed = false;

  const nine = {
    image: "",
    value: "2",
  };
  const two = {
    image: "",
    value: "9",
  };

  test("should count player points with two cards", () => {
    const cards = [nine, two];
    expect(pointsHelpers.getPointsOutcomes(cards, player, croupierCardReversed)).toBe(11);
  });

  test("should count only first corupier card when the other is not reversed", () => {
    const cards = [nine, two];
    expect(pointsHelpers.getPointsOutcomes(cards, croupier, croupierCardNotReversed)).toBe(2);
  });

  test("should count all corupier card when the other is reversed", () => {
    const cards = [two, nine];
    expect(pointsHelpers.getPointsOutcomes(cards, player, croupierCardReversed)).toBe(11);
  });

  test("should count one ace when second is not reversed ", () => {
    const cards = [ace, ace];
    expect(pointsHelpers.getPointsOutcomes(cards, croupier, croupierCardNotReversed)).toBe(11);
  });

  test("should count both aces when second card is reversed, but it should be 12 points ", () => {
    const cards = [ace, ace];
    expect(pointsHelpers.getPointsOutcomes(cards, player, croupierCardReversed)).toBe(12);
  });

  test("should 11 aces give 21 points ", () => {
    let cards: DrawedCard[] = [];

    for (let index = 0; index < 11; index++) {
      cards.push(ace);
    }
    expect(pointsHelpers.getPointsOutcomes(cards, player, croupierCardReversed)).toBe(21);
  });

  test("should 21 aces give 21 points ", () => {
    let cards: DrawedCard[] = [];

    for (let index = 0; index < 21; index++) {
      cards.push(ace);
    }
    expect(pointsHelpers.getPointsOutcomes(cards, player, croupierCardReversed)).toBe(21);
  });

  test("should jack, queen and ace return 21 ", () => {
    const cards = [jack, ace, queen];

    expect(pointsHelpers.getPointsOutcomes(cards, player, croupierCardReversed)).toBe(21);
  });

  test("should 10 and ace return 21 ", () => {
    const cards = [
      {
        image: "https://deckofcardsapi.com/static/img/10H.png",
        value: "10",
      },
      ace,
    ];

    expect(pointsHelpers.getPointsOutcomes(cards, player, croupierCardReversed)).toBe(21);
  });

  test("should king and two aces return 12 ", () => {
    const cards = [king, ace, ace];

    expect(pointsHelpers.getPointsOutcomes(cards, player, croupierCardReversed)).toBe(12);
  });

  test("should count only first card when croupier card is not reversed, but somehow corupier has more than two cards ", () => {
    const cards = [jack, ace, queen];

    expect(pointsHelpers.getPointsOutcomes(cards, croupier, croupierCardNotReversed)).toBe(10);
  });

  test("should get 0 points when cards are wrong ", () => {
    const cards = [
      {
        image: "",
        value: "JOKER",
      },
      {
        image: "",
        value: "JOKER",
      },
      {
        image: "",
        value: "JOKER",
      },
    ];

    expect(pointsHelpers.getPointsOutcomes(cards, player, croupierCardNotReversed)).toBe(0);
  });
});
