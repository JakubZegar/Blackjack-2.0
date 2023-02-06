import React from "react";
import { screen } from "@testing-library/react";
import RoundHistory from "./RoundHistory";
import { renderWithContext } from "../../TestHelpers/TestHelper";
import { DrawedCard } from "../../types/global";
import { GameState } from "../../const/gameState";

describe("Round History component", () => {
  test("should render history of round that has already ended", () => {
    const playerCards: DrawedCard[] = [
      {
        value: "someval",
        image: "",
        cardId: 0,
      },
      {
        value: "someval",
        image: "",
        cardId: 1,
      },
    ];
    const croupierCards: DrawedCard[] = [
      {
        value: "someval",
        image: "",
        cardId: 0,
      },
      {
        value: "someval",
        image: "",
        cardId: 1,
      },
    ];
    const currentRoundStatus = GameState.FINISH_ROUND;

    renderWithContext(<RoundHistory />, { playerCards, croupierCards, currentRoundStatus });

    const history = screen.getAllByTestId("historyElement");

    expect(history.length).toBe(1);
  });

  test("should render no history since no round ended", () => {
    renderWithContext(<RoundHistory />);

    const history = screen.queryByTestId("historyElement");
    expect(history).toBeNull();
  });
});
