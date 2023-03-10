import React from "react";
import { screen } from "@testing-library/react";
import { renderWithDeckContext } from "../TestHelpers/TestHelper";
import Game from "./Game";

describe("Game component", () => {
  test("should render two reversed cards for player and one reversed and one hidden for croupier ", async () => {
    renderWithDeckContext(<Game />);

    const playerCards = await screen.findAllByTestId("playerCard");
    const croupierVisibleCard = await screen.findAllByTestId("croupierCardVisible");
    const croupierHiddenCard = await screen.findAllByTestId("cardHidden");

    expect(playerCards[0]).toBeInTheDocument();
    expect(croupierVisibleCard.length).toBe(1);
    expect(croupierHiddenCard.length).toBe(1);
  });
});
