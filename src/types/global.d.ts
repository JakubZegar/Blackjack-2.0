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
};

type CardImages = {
  svg: string;
  png: string;
};

export type TGameContext = {
  playerCards: DrawedCard[];
  croupierCards: DrawedCard[];
  drawOnGameStart: () => void;
  drawOneCard: (player?) => void;
  setRoundEnded: (newRoundStatus: SetStateAction<{ player: boolean; croupier: boolean }>) => void;
  message: string;
  setMessage: (message: SetStateAction<string>) => void;
  roundEnded: {
    player: boolean;
    croupier: boolean;
  };
  resetRound: () => void;
  setPoints: (points: SetStateAction<{ playerPoints: number; croupierPoints: number }>) => void;
  points: { playerPoints: number; croupierPoints: number };
  prevoiusRounds: EndedRoundStatus[];
  roundWinners: winner[];
};

export type TDeckContext = {
  deckId: string;
  setDeckId: Dispatch<SetStateAction<string>>;
  shuffleDeck: () => void;
};

export type EndedRoundStatus = {
  playerCards: DrawedCard[];
  croupierCards: DrawedCard[];
};
