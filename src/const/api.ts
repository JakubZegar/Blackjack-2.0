import { TEndpoints } from "../types/global";

const mainLink: string = "https://deckofcardsapi.com/api/deck/";
const newDeckShuffledLink: string = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=";
const drawOneCardLink: string = "/draw/?count=1";
const drawTwoCardsLink: string = "/draw/?count=2";
const drawFourCardsLink: string = "/draw/?count=4";
const drawXCards: string = "/draw/?count=";
const reshuffleDeckLink: string = "/shuffle/"
const decksCount: number = 6;

export const endpoints: TEndpoints = {
    mainLink:mainLink,
    newDeckShuffledLink: newDeckShuffledLink + decksCount,
    drawOneCardLink: drawOneCardLink,
    drawTwoCardsLink: drawTwoCardsLink,
    drawFourCardsLink: drawFourCardsLink,
    drawXCards: drawXCards,
    reshuffleDeckLink: reshuffleDeckLink,
    decksCount: decksCount
}