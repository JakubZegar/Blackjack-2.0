import axios, {AxiosResponse} from 'axios';
import {PointsType, DrawCardResponse, DrawedCard} from '../types/global';

import React, {useState, useEffect, useCallback} from 'react'
import { mainLink, drawTwoCardsLink, drawOneCardLink } from '../const/api';
import Actions from './Actions';
import { GameContainer, HandContainer, MiddleContainer, PlayerSection, SideContainer, StyledCard } from './components/GameElements';
import { Preloader } from './components/Preloader';
import ReversableCard from './components/ReversableCard';
import Points from './Points';

type Props = {
  deck: string
} 

type RoundStatus = {
  player: boolean,
  computer: boolean,
}

export default function GameInterface({deck}: Props) {

  const [playerCards, setPlayserCards] = useState<DrawedCard[]>([]);
  const [crouperCards, setCroupierCards] = useState<DrawedCard[]>([]);
  const [isCroupierCardReversed, setIsCroupierCardReversed] = useState<boolean>(false);

  const [points, setPoints] = useState<PointsType>({
    player: 0,
    computer: 0,
  })

  const [roundEnded, setRoundEnded] = useState<RoundStatus>({
    player: false,
    computer: false,
  })

  useEffect(() => {
    axios.get<DrawCardResponse>(mainLink + deck + drawTwoCardsLink).then((result: AxiosResponse<DrawCardResponse>) => {
      setPlayserCards(() => {return result.data.cards})
    }).then(() => {
      
      axios.get<DrawCardResponse>(mainLink + deck + drawTwoCardsLink).then((result: AxiosResponse<DrawCardResponse>) => {
        
        setCroupierCards(() => {return result.data.cards})
      })
    })
  }, [deck])

  useEffect(() => {
    if(crouperCards.length > 0) {
      console.log(crouperCards[0].image);
    }
  }, [crouperCards])
  

  const drawOneCard = () => {
    axios.get<DrawCardResponse>(mainLink + deck + drawOneCardLink).then((result: AxiosResponse<DrawCardResponse>) => {
      setPlayserCards((playerCards: DrawedCard[]) => {return [...playerCards, ...result.data.cards]})
    })
  }

  const passRound = useCallback(() => {
    setIsCroupierCardReversed(() => {return true})
    setRoundEnded((prevRoundStatus: RoundStatus) => {return {...prevRoundStatus, player: true}})
  },[]);

  const setPlayerPoints = useCallback((points: number) => {
    setPoints((prevPoints: PointsType ) => {return {...prevPoints, player: points}})
  }, []);

  const setComputerPoints = useCallback((points: number) => {
    setPoints((prevPoints: PointsType) => {return {...prevPoints, computer: points}})
  }, []);

  useEffect(() => {
  }, [points])

  
  return (
    playerCards.length > 0 ? 
    <GameContainer>
      <SideContainer>
      </SideContainer>

      <MiddleContainer>
        <PlayerSection>
          <HandContainer>
          {
            isCroupierCardReversed === false && crouperCards.length === 2
            ? 
            <>
              <StyledCard image={crouperCards[0].image} />
              <ReversableCard aversImage={crouperCards[1].image} isReversed={isCroupierCardReversed} />
            </>

            :
            crouperCards.map((card, index) => {
              return <ReversableCard key={index} isReversed={isCroupierCardReversed} aversImage={card.image} />
            })
          }
          </HandContainer>

          {crouperCards.length > 0 && <Points cards={crouperCards} isCroupierCardReversed={isCroupierCardReversed} setPointMethod={setComputerPoints}/>}
        </PlayerSection>

        <Actions drawFunction={drawOneCard} passRound={passRound}/>

        <PlayerSection>
          {playerCards.length > 0 ? <Points player={true} cards={playerCards} setPointMethod={setPlayerPoints}/> : <></> }
          <HandContainer>
            {
              playerCards.map((card: DrawedCard, index: number) => {
                return <StyledCard key={index} image={card.image}/>
              })
            }
          </HandContainer>
        </PlayerSection>
      </MiddleContainer>

      <SideContainer>
      </SideContainer>

    </GameContainer> : <Preloader />
  )
}
