import React, { ReactNode } from "react";
import { render } from "@testing-library/react";
import { cardService } from "../services/CardService";
import { GameContext } from "../context/GameContext";
import { GameState } from "../const/gameState";
import { TDeckContext, TGameContext } from "../types/global";
import { DeckContext, DeckContextProvider } from "../context/DeckContext";

export const mockGameContext: TGameContext = {
  playerCards: [],
  croupierCards: [],
  drawOneCard: () => {},
  message: "",
  setMessage: () => {},
  currentRoundStatus: GameState.DRAW_CARDS,
  setCurrentRoundStatus: () => {},
};

export const mockDeckContext: TDeckContext = {
  deckId: "sampleDeckId",
  setDeckId: () => {},
  shuffleDeck: () => {},
};

const createDeckMock = jest.spyOn(cardService, "createDeck");
const drawCardsMock = jest.spyOn(cardService, "drawCards");
export const sampleDeckId = "sampleDeckId";

beforeEach(() => {
  jest.clearAllMocks();
  createDeckMock.mockResolvedValue(sampleDeckId);
  drawCardsMock.mockResolvedValue([
    { value: "10", image: "", cardId: 0 },
    { value: "10", image: "", cardId: 1 },
    { value: "10", image: "", cardId: 2 },
    { value: "10", image: "", cardId: 3 },
  ]);
});

export const renderWithContext = (comp: ReactNode, props?: Partial<typeof mockGameContext>) => {
  return render(<GameContext.Provider value={{ ...mockGameContext, ...props }}>{comp}</GameContext.Provider>);
};

export const renderWithDeckContext = (comp: ReactNode, props?: Partial<typeof mockDeckContext>) => {
  return render(<DeckContext.Provider value={{ ...mockDeckContext, ...props }}>{comp}</DeckContext.Provider>);
};
