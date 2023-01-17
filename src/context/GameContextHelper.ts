import { winner } from "../const/gameWinner";
import { rules } from "../const/rules";

const findWhoWonRound = (playerPoints: number, croupierPoints: number) => {
  if (playerPoints > rules.BLACKJACK) {
    return winner.CROUPIER;
  } else if (playerPoints > croupierPoints) {
    return winner.PLAYER;
  } else if (playerPoints === croupierPoints) {
    return winner.DRAW;
  } else if (croupierPoints > rules.BLACKJACK) {
    return winner.PLAYER;
  } else {
    return winner.CROUPIER;
  }
};

const gameContextHelpers = {
  findWhoWonRound: findWhoWonRound,
};

export default gameContextHelpers;
