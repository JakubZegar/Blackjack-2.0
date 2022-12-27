import { SetStateAction, Dispatch} from 'react'

export type Colors = {
    primary: string,
    hover: string,
    hoverDark: string,
    border: string,
    secondary: string,
    text: string,
    background: string,
}

export type TEndpoints = {
  mainLink: string,
  newDeckShuffledLink: string,
  drawOneCardLink: string,
  drawTwoCardsLink: string,
  drawFourCardsLink: string,
  drawXCards: string,
  reshuffleDeckLink: string,
  decksCount: number
}

export type TRoutes = {
  game: string,
  about: string,
}

export type TBreakpoints = {
  laptop: string,
  tablet: string,
  mobile: string
}


export type PointsType = {
    player: number,
    computer: number,
}

export type DeckResponse = {
    success: boolean,
    deck_id: string,
    shuffled: boolean,
    remaining: number
}

export type DrawCardResponse = {
    success: boolean, 
    deck_id: string, 
    cards: Array<DrawedCard>, 
    remaining: number
}

export type DrawedCard = {
    code: string, 
    image: string, 
    images: CardImages,
    value: string, 
    suit: string
}

type CardImages = {
    svg: string, 
    png: string
}

export type TGameContext = {
  deckId: string,
  setDeckId: Dispatch<SetStateAction<string>>
  playerCards: DrawedCard[],
  croupierCards: DrawedCard[],
  isCroupierCardReversed: boolean,
  setIsCroupierCardReversed: Dispatch<SetStateAction<boolean>>,
  drawOnGameStart: () => void,
  drawOneCard: (player?) => void,
  passRound: () => void,
}

export type RoundStatus = {
  player: boolean;
  computer: boolean;
};
