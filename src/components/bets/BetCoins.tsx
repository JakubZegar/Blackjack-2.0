import React from 'react'
import { betButtons } from "../../const/betButtons";
import { GameState } from '../../const/gameState';
import { BetCoin, BetConiText } from './BetsElements';

type Props = {
  currentRoundStatus: GameState,
  balance: number,
  placeBet: (coinValue: number) => void;
}

export default function BetCoins({currentRoundStatus, balance, placeBet}: Props) {

    const buttons = betButtons.map((buttonValue) => {    
        const isBtnDisabled = currentRoundStatus !== GameState.PLAYER_ROUND || balance - buttonValue < 0;
        return (
          <BetCoin key={buttonValue} disabled={isBtnDisabled} onClick={() => {placeBet(buttonValue)}}>
            <BetConiText>{buttonValue}</BetConiText>
          </BetCoin>
        )
      })

  return <>{buttons}</>;
}
