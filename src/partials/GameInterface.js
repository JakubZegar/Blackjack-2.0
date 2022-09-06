import axios from 'axios';
import React, {useState, useEffect, useCallback} from 'react'
import { mainLink, drawTwoCardsLink, drawOneCardLink } from '../const/api';
import Actions from './Actions';
import { GameContainer, HandContainer, MiddleContainer, PlayerSection, SideContainer, StyledCard } from './components/GameElements';
import { Preloader } from './components/Preloader';
import ReversableCard from './components/ReversableCard';
import Points from './Points';

export default function GameInterface({deck}) {

  const [playerCards, setPlayserCards] = useState([])
  const [crouperCards, setCroupierCards] = useState([])

  const [points, setPoints] = useState({
    player: 0,
    computer: 0,
  })

  const [isCroupierCardReversed, setIsCroupierCardReversed] = useState(false)

  const [roundEnded, setRoundEnded] = useState({
    player: false,
    computer: false,
  })

  useEffect(() => {
    axios.get(mainLink + deck + drawTwoCardsLink).then((result) => {
      setPlayserCards(() => {return result.data.cards})
    }).then(() => {
      
      axios.get(mainLink + deck + drawTwoCardsLink).then((result) => {
        setCroupierCards(() => {return result.data.cards})
      })
    })


  }, [deck])

  const drawOneCard = () => {
    axios.get(mainLink + deck + drawOneCardLink).then((result) => {
      setPlayserCards((playerCards) => {return [...playerCards, ...result.data.cards]})
    })
  }

  const passRound = () => {
    setIsCroupierCardReversed(() => {return true})
    setRoundEnded((prevRoundStatus) => {return {...prevRoundStatus, player: true}})
  }

  useEffect(() => {
    console.log(playerCards);
  }, [playerCards])

  const setPlayerPoints = useCallback((points) => {
    setPoints((prevPoints) => {return {...prevPoints, player: points}})
  }, []);

  const setComputerPoints = useCallback((points) => {
    setPoints((prevPoints) => {return {...prevPoints, computer: points}})
  }, []);

  useEffect(() => {
    console.log(points);
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
              <StyledCard text={crouperCards[0].name} image={crouperCards[0].image}/>
              <ReversableCard text={crouperCards[1].name} image={crouperCards[1].image}/>
            </>

            :
            crouperCards.map((card, index) => {
              return <ReversableCard key={index} isReversed={isCroupierCardReversed} text={card.name} aversImage={card.image} />
            })
          }
          </HandContainer>

          <Points cards={crouperCards} isCroupierCardReversed={isCroupierCardReversed} setPointMethod={setComputerPoints}/>
        </PlayerSection>

        <Actions drawFunction={drawOneCard} passRound={passRound}/>

        <PlayerSection>
          <Points player={true} cards={playerCards} setPointMethod={setPlayerPoints}/>
          <HandContainer>
            {
              playerCards.map((card, index) => {
                return <StyledCard key={index} text={card.name} image={card.image}/>
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
