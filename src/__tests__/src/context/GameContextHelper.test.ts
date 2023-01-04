import { winner } from "../../../const/gameWinner";
import gameContextHelpers from "../../../context/GameContextHelper";

test("should be draw", () => {
  expect(gameContextHelpers.findWhoWonRound(21, 21)).toBe(winner.DRAW);
  expect(gameContextHelpers.findWhoWonRound(0, 0)).toBe(winner.DRAW);
  expect(gameContextHelpers.findWhoWonRound(12, 12)).toBe(winner.DRAW);
  expect(gameContextHelpers.findWhoWonRound(13, 13)).toBe(winner.DRAW);
  expect(gameContextHelpers.findWhoWonRound(4, 4)).toBe(winner.DRAW);
  expect(gameContextHelpers.findWhoWonRound(18, 18)).toBe(winner.DRAW);
  expect(gameContextHelpers.findWhoWonRound(20, 20)).toBe(winner.DRAW);
});

test("should player win", () => {
  expect(gameContextHelpers.findWhoWonRound(21, 18)).toBe(winner.PLAYER);
  expect(gameContextHelpers.findWhoWonRound(1, 0)).toBe(winner.PLAYER);
  expect(gameContextHelpers.findWhoWonRound(18, 12)).toBe(winner.PLAYER);
  expect(gameContextHelpers.findWhoWonRound(13, 22)).toBe(winner.PLAYER);
  expect(gameContextHelpers.findWhoWonRound(21, 24)).toBe(winner.PLAYER);
  expect(gameContextHelpers.findWhoWonRound(17, 23)).toBe(winner.PLAYER);
  expect(gameContextHelpers.findWhoWonRound(0, 22)).toBe(winner.PLAYER);
});

test("should croupier win", () => {
  expect(gameContextHelpers.findWhoWonRound(15, 18)).toBe(winner.CROUPIER);
  expect(gameContextHelpers.findWhoWonRound(17, 18)).toBe(winner.CROUPIER);
  expect(gameContextHelpers.findWhoWonRound(23, 21)).toBe(winner.CROUPIER);
  expect(gameContextHelpers.findWhoWonRound(25, 18)).toBe(winner.CROUPIER);
  expect(gameContextHelpers.findWhoWonRound(0, 1)).toBe(winner.CROUPIER);
  expect(gameContextHelpers.findWhoWonRound(24, 24)).toBe(winner.CROUPIER);
  expect(gameContextHelpers.findWhoWonRound(22, 22)).toBe(winner.CROUPIER);
});
