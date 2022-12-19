import axios, {AxiosResponse} from 'axios';
import {PointsType, DrawCardResponse, DrawedCard} from '../types/global';

import React, {useState, useEffect, useCallback} from 'react'
import { mainLink, drawTwoCardsLink, drawOneCardLink } from '../const/api';
import Actions from './Actions';
import { GameContainer, HandContainer, MiddleContainer, PlayerSection, SideContainer, StyledCard } from './components/GameElements';
import { Preloader } from './components/Preloader';
import ReversableCard from './components/ReversableCard';
import Points from './Points';
import { useDispatch, useSelector } from 'react-redux' 
import { bindActionCreators } from 'redux';
import { actionCreators, ReducerStateType } from '../state';

type Props = {
  deck: string
} 

type RoundStatus = {
  player: boolean,
  computer: boolean,
}

export default function GameInterface({deck}: Props) {

  const dispatch = useDispatch();


  const {drawPlayerCards, drawCroupierCards} = bindActionCreators(actionCreators, dispatch)

  const state = useSelector((state: ReducerStateType) => state );

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
      drawPlayerCards(result.data.cards);

    }).then(() => {
      
      axios.get<DrawCardResponse>(mainLink + deck + drawTwoCardsLink).then((result: AxiosResponse<DrawCardResponse>) => {
        drawCroupierCards(result.data.cards)
      })
    })
  }, [deck])

  
  const drawOneCard = () => {
    axios.get<DrawCardResponse>(mainLink + deck + drawOneCardLink).then((result: AxiosResponse<DrawCardResponse>) => {
      drawPlayerCards(result.data.cards);
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
    state.playerCard.length > 0 ? 
    <GameContainer>
      <SideContainer>
      </SideContainer>

      <MiddleContainer>
        <PlayerSection>
          <HandContainer>
          {
            isCroupierCardReversed === false && state.croupierCard.length === 2
            ? 
            <>
              <StyledCard image={state.croupierCard[0].image} />
              <ReversableCard aversImage={state.croupierCard[1].image} isReversed={isCroupierCardReversed} />
            </>

            :
            state.croupierCard.map((card, index) => {
              return <ReversableCard key={index} isReversed={isCroupierCardReversed} aversImage={card.image} />
            })
          }
          </HandContainer>

          {state.croupierCard.length > 0 && <Points cards={state.croupierCard} isCroupierCardReversed={isCroupierCardReversed} setPointMethod={setComputerPoints}/>}
        </PlayerSection>

        <Actions drawFunction={drawOneCard} passRound={passRound}/>

        <PlayerSection>
          {state.playerCard.length > 0 ? <Points player={true} cards={state.playerCard} setPointMethod={setPlayerPoints}/> : <></> }
          <HandContainer>
            {
              state.playerCard.map((card: DrawedCard, index: number) => {
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
