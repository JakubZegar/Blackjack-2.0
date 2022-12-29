import { SetStateAction, Dispatch } from "react";

export type PointsType = {
  player: number;
  computer: number;
};

export type DeckResponse = {
  success: boolean;
  deck_id: string;
  shuffled: boolean;
  remaining: number;
};

export type DrawCardResponse = {
  success: boolean;
  deck_id: string;
  cards: DrawedCard[];
  remaining: number;
};

export type DrawedCard = {
  code: string;
  image: string;
  images: CardImages;
  value: string;
  suit: string;
};

type CardImages = {
  svg: string;
  png: string;
};

export type TGameContext = {
  deckId: string;
  setDeckId: Dispatch<SetStateAction<string>>;
  playerCards: DrawedCard[];
  croupierCards: DrawedCard[];
  isCroupierCardReversed: boolean;
  setIsCroupierCardReversed: Dispatch<SetStateAction<boolean>>;
  drawOnGameStart: () => void;
  drawOneCard: (player?) => void;
  passRound: () => void;
  shuffleDeck: () => void;
};
