import React from "react";
import { MenuButton } from "../general/Button";
import { BalanceContainer, Balance, BalanceText, BetCoin, BetText, BetConiText } from "./BetsElements";

export default function Bets() {
  return (
    <BalanceContainer>
      <MenuButton to={"/"}>Main menu</MenuButton>

      <Balance>
        <BalanceText>Balance: 0</BalanceText>
      </Balance>

      <BetCoin disabled={true} onClick={() => {}}>
        <BetConiText>10</BetConiText>
      </BetCoin>
      <BetCoin disabled={true} onClick={() => {}}>
        <BetConiText>50</BetConiText>
      </BetCoin>
      <BetCoin disabled={true} onClick={() => {}}>
        <BetConiText>100</BetConiText>
      </BetCoin>
      <BetCoin disabled={true} onClick={() => {}}>
        <BetConiText>500</BetConiText>
      </BetCoin>

      <Balance>
        <BetText>Current bet: 0</BetText>
      </Balance>
    </BalanceContainer>
  );
}
