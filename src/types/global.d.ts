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
  image: string;
  value: string;
  cardIndex: number;
};

type CardImages = {
  svg: string;
  png: string;
};

export type TDeckContext = {
  deckId: string;
  setDeckId: Dispatch<SetStateAction<string>>;
  shuffleDeck: () => void;
};

export type EndedRoundStatus = {
  playerCards: DrawedCard[];
  croupierCards: DrawedCard[];
  winner: winner.PLAYER | winner.CROUPIER | winner.DRAW;
  amountWon: number;
};
