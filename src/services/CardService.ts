import axios, { AxiosResponse } from "axios";
import { DeckResponse, DrawCardResponse } from "../types/global";

import { endpoints } from "../const/api";

const createDeck = async () => {
  const result: AxiosResponse<DeckResponse> = await axios.get<DeckResponse>(endpoints.newDeckShuffledLink);
  return result.data.deck_id;
};

const drawCards = async (deckId: string, cardNumber: string) => {
  const result: AxiosResponse<DrawCardResponse> = await axios.get<DrawCardResponse>(
    endpoints.mainLink + deckId + cardNumber
  );
  return result.data.cards.map((card) => {
    return {
      value: card.value,
      image: card.image,
    };
  });
};

const shuffleDeck = async (deckId: string) => {
  const result: AxiosResponse<DrawCardResponse> = await axios.get<DrawCardResponse>(
    endpoints.mainLink + deckId + endpoints.reshuffleDeckLink
  );
  return result;
};

export const cardService = {
  createDeck: createDeck,
  drawCards: drawCards,
  shuffleDeck: shuffleDeck,
};
