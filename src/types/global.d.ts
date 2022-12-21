export type Colors = {
  primary: string;
  hover: string;
  hoverDark: string;
  border: string;
  secondary: string;
  text: string;
  background: string;
};

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
  cards: Array<DrawedCard>;
  remaining: number;
};

// NOTE Jaka koncepcja jest za code i value?
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
