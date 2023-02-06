import React, { ReactNode } from "react";
import { render } from "@testing-library/react";
import { cardService } from "../services/CardService";
import { GameContext } from "../context/GameContext";
import { GameState } from "../const/gameState";
import { TGameContext } from "../types/global";

export const mockContext: TGameContext = {
  playerCards: [],
  croupierCards: [],
  drawOneCard: () => {},
  message: "",
  setMessage: () => {},
  currentRoundStatus: GameState.DRAW_CARDS,
  setCurrentRoundStatus: () => {},
};

const createDeckMock = jest.spyOn(cardService, "createDeck");
const drawCardsMock = jest.spyOn(cardService, "drawCards");

export const sampleDeckId = "sampleDeckId";

beforeEach(() => {
  jest.clearAllMocks();
  createDeckMock.mockResolvedValue(sampleDeckId);
  drawCardsMock.mockResolvedValue([{ value: "test", image: "", cardId: 0 }]);
});

export const renderWithContext = (comp: ReactNode, props?: Partial<typeof mockContext>) => {
  return render(<GameContext.Provider value={{ ...mockContext, ...props }}>{comp}</GameContext.Provider>);
};
