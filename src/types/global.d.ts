import { SetStateAction, Dispatch } from "react";
import { winner } from "../const/gameWinner";

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
  cardId: number;
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
};

export type TGameContext = {
  playerCards: DrawedCard[];
  croupierCards: DrawedCard[];
  drawOneCard: (player?: boolean) => void;
  message: string;
  setMessage: (message: SetStateAction<string>) => void;
  currentRoundStatus: GameState;
  setCurrentRoundStatus: (message: SetStateAction<GameState>) => void;
  getRoundWinner: () => winner;
};
