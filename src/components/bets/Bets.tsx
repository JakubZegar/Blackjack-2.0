import React from "react";
import useGameContext from "../../hooks/useGameContext";
import { Button, MenuButton } from "../general/Button";
import { BalanceContainer, Balance, BalanceText, BetCoin, BetText, BetConiText } from "./BetsElements";
import { GameState } from "../../const/gameState";
import { betButtons } from "../../const/betButtons";
import { useBets } from "./BetsHooks";
import { log } from "console";

export default function Bets() {
  
  const { setCurrentRoundStatus, currentRoundStatus } = useGameContext();

  const {balance, currentBet, placeBet} = useBets()

  const bettingButtons = betButtons.map((buttonValue) => {
    console.log("BUtton ", buttonValue);
    
    const isBtnDisabled = currentRoundStatus !== GameState.PLAYER_ROUND || balance - buttonValue < 0;
    return (
      <BetCoin key={buttonValue} disabled={isBtnDisabled} onClick={() => {placeBet(buttonValue)}}>
        <BetConiText>{buttonValue}</BetConiText>
      </BetCoin>
    )
  })

  return (
    <BalanceContainer>
      <MenuButton to={"/"}>Main menu</MenuButton>

      <Balance>
        <BalanceText>Balance: {balance}</BalanceText>
      </Balance>

      {bettingButtons}

      <Balance>
        <BetText>Current bet: {currentBet}</BetText>
      </Balance>

      <Button disabled={currentRoundStatus !== GameState.PLACING_BET} onClick={() => setCurrentRoundStatus(GameState.DRAW_CARDS)}>
        Start Round 
      </Button>
    </BalanceContainer>
  );
}
