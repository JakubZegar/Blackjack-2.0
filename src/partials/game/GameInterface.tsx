import React, { useState, useEffect, useCallback } from 'react';

import Actions from '../actions/Actions';
import { GameContainer, MiddleContainer, PlayerSection, SideContainer } from './GameElements';
import { Preloader } from '../general/Preloader';
import Points from '../points/Points';
import Hand from '../cards/Hand';

import { DrawedCard } from '../../types/global';
import { cardService } from '../../services/CardService';
import { endpoints } from '../../const/api';

type Props = {
  deck: string;
};

type RoundStatus = {
  player: boolean;
  computer: boolean;
};

export default function GameInterface({ deck }: Props) {
  // NOTE jak głębokie może być zagnieżdżenie tych propsów? Może warto rozważyć context lub wyniesienie tego do hooka

  const [playerCards, setPlayerCards] = useState<DrawedCard[]>([]);
  const [crouperCards, setCroupierCards] = useState<DrawedCard[]>([]);
  const [isCroupierCardReversed, setIsCroupierCardReversed] = useState<boolean>(false);

  const [roundEnded, setRoundEnded] = useState<RoundStatus>({
    player: false,
    computer: false,
  });

  const croupierHandCards = crouperCards.length > 0 ? <Hand isCardReversed={isCroupierCardReversed} cards={crouperCards} ></Hand> : null;
  const playerHandsCards = playerCards.length > 0 ? <Hand cards={playerCards} ></Hand> : null;
  const croupierPoints = crouperCards.length > 0 ? <Points cards={crouperCards} isCroupierCardReversed={isCroupierCardReversed} /> : null
  const playerPoints = playerCards.length > 0 ? <Points player={true} cards={playerCards}/> : null

  useEffect(() => {
    cardService.drawCards(deck, endpoints.drawFourCardsLink).then( (result: DrawedCard[]) => {
      setPlayerCards(result.slice(0,2));
      setCroupierCards(result.slice(2,4));
    })

  }, [deck]);

  const drawOneCard = (player:boolean = true) => {
    cardService.drawCards(deck, endpoints.drawOneCardLink).then( (result: DrawedCard[]) => {
      player ? setPlayerCards((prevCards) => {return [...prevCards, ...result]}) : setCroupierCards((prevCards) => {return [...prevCards, ...result]});
    })
  };

  const passRound = useCallback(() => {
    setIsCroupierCardReversed(() => {
      return true;
    });
    setRoundEnded((prevRoundStatus: RoundStatus) => {
      return { ...prevRoundStatus, player: true };
    });
  }, []);

  if(playerCards.length <= 0) {
    return <Preloader/>
  }

  return (
      <GameContainer>
        <SideContainer></SideContainer>

        <MiddleContainer>

          <PlayerSection>
            {croupierHandCards}
            {croupierPoints}
          </PlayerSection>

          <Actions drawFunction={drawOneCard} passRound={passRound} />

          <PlayerSection>
            {playerPoints}
            {playerHandsCards}
          </PlayerSection>

        </MiddleContainer>

        <SideContainer></SideContainer>
      </GameContainer>
  );
}
