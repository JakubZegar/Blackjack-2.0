import { winner } from "../const/gameWinner";

const findWhoWonRound = (playerPoints: number, croupierPoints: number) => {
  if (playerPoints > 21) {
    return winner.CROUPIER;
  } else if (playerPoints > croupierPoints) {
    return winner.PLAYER;
  } else if (playerPoints === croupierPoints) {
    return winner.DRAW;
  } else if (croupierPoints > 21) {
    return winner.PLAYER;
  } else {
    return winner.CROUPIER;
  }
};

const gameContextHelpers = {
  findWhoWonRound: findWhoWonRound,
};

export default gameContextHelpers;
