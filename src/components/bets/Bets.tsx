import React from "react";

import BetCoins from "./BetCoins";
import { Button, MenuButton } from "../general/Button";
import { BalanceContainer, Balance, BalanceText, BetText, } from "./BetsElements";

import { GameState } from "../../const/gameState";
import { routes } from "../../const/routes";

import useGameContext from "../../hooks/useGameContext";
import { useBets } from "./BetsHooks";

export default function Bets() {
  
  const { setCurrentRoundStatus, currentRoundStatus, playerCards, croupierCards, getRoundWinner } = useGameContext();

  const {balance, currentBet, placeBet} = useBets(currentRoundStatus, playerCards, croupierCards, getRoundWinner)

  return (
    <BalanceContainer>
      <MenuButton to={routes.root}>Main menu</MenuButton>

      <Balance>
        <BalanceText>Balance: {balance}</BalanceText>
      </Balance>

      <BetCoins balance={balance} currentRoundStatus={currentRoundStatus} placeBet={placeBet}/>

      <Balance>
        <BetText>Current bet: {currentBet}</BetText>
      </Balance>

      <Button disabled={currentRoundStatus !== GameState.PLACING_BET} onClick={() => setCurrentRoundStatus(GameState.DRAW_CARDS)}>
        Start Round 
      </Button>
    </BalanceContainer>
  );
}
