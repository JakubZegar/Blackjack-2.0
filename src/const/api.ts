const mainLink = "https://deckofcardsapi.com/api/deck/";
const newDeckShuffledLink =
  "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=";
const drawOneCardLink = "/draw/?count=1";
const drawTwoCardsLink = "/draw/?count=2";
const drawFourCardsLink = "/draw/?count=4";
const drawXCards = "/draw/?count=";
const reshuffleDeckLink = "/shuffle/";
const decksCount = 6;

export const endpoints = {
  mainLink: mainLink,
  newDeckShuffledLink: newDeckShuffledLink + decksCount,
  drawOneCardLink: drawOneCardLink,
  drawTwoCardsLink: drawTwoCardsLink,
  drawFourCardsLink: drawFourCardsLink,
  drawXCards: drawXCards,
  reshuffleDeckLink: reshuffleDeckLink,
  decksCount: decksCount,
};
