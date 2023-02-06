import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import Actions from "./Actions";
import { renderWithContext } from "../../TestHelpers/TestHelper";
import { DrawedCard } from "../../types/global";
import { GameState } from "../../const/gameState";

const drawOneCard = jest.fn();
const setCurrentRoundStatus = jest.fn();

describe("Action component", () => {
  test("should render 3 butons", () => {
    renderWithContext(<Actions />);

    const buttons = screen.getAllByRole("button");

    expect(buttons.length).toBe(3);
  });

  test("should draw card when is player round", () => {
    let currentRoundStatus = GameState.PLAYER_ROUND;
    renderWithContext(<Actions />, { drawOneCard, currentRoundStatus });

    const drawButton = screen.getByText("Draw");

    fireEvent.click(drawButton);

    expect(drawOneCard).toBeCalledTimes(1);
  });

  test("should NOT draw card when is croupier round", () => {
    let currentRoundStatus = GameState.CROUPIER_ROUND;
    renderWithContext(<Actions />, { drawOneCard, currentRoundStatus });

    const drawButton = screen.getByText("Draw");

    fireEvent.click(drawButton);

    expect(drawOneCard).toBeCalledTimes(0);
  });

  test("should pass and change status to croupier when is player round", () => {
    let currentRoundStatus = GameState.PLAYER_ROUND;

    renderWithContext(<Actions />, { setCurrentRoundStatus, currentRoundStatus });

    const passButton = screen.getByText("Pass");
    fireEvent.click(passButton);
    expect(setCurrentRoundStatus).toBeCalledTimes(1);
  });

  test("should reset when round is finished", () => {
    let currentRoundStatus = GameState.FINISH_ROUND;

    renderWithContext(<Actions />, { setCurrentRoundStatus, currentRoundStatus });

    const resetButton = screen.getByText("Reset");
    fireEvent.click(resetButton);
    expect(setCurrentRoundStatus).toBeCalledTimes(1);
  });
});
