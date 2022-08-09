import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { mainLink, drawTwoCardsLink, drawOneCardLink } from '../const/api';
import { GameContainer, HandContainer, MiddleContainer, SideContainer, StyledCard } from './components/GameElements';
import { Preloader } from './components/Preloader';
import ReversableCard from './components/ReversableCard';

export default function GameInterface({deck}) {

  const [playerCards, setPlayserCards] = useState([])
  const [crouperCards, sertCroupierCards] = useState([])

  const [isReversed, setIsReversed] = useState(false)

  useEffect(() => {
    axios.get(mainLink + deck + drawTwoCardsLink).then((result) => {
      setPlayserCards(() => {return result.data.cards})
    }).then(() => {
      
      axios.get(mainLink + deck + drawTwoCardsLink).then((result) => {
        sertCroupierCards(() => {return result.data.cards})
      })
    })


  }, [deck])

  const drawOneCard = () => {
    axios.get(mainLink + deck + drawOneCardLink).then((result) => {
      setPlayserCards((playerCards) => {return [...playerCards, ...result.data.cards]})
    })
  }

  useEffect(() => {
    console.log(playerCards);
  }, [playerCards])
  
  const setReversed = () => {
    setIsReversed((cardState) => { return !cardState})
  }

  return (
    playerCards.length > 0 ? 
    <GameContainer>
      <SideContainer>
      </SideContainer>

      <MiddleContainer>
        <HandContainer onClick={setReversed} >
        {
          crouperCards.map((card, index) => {
            return <ReversableCard key={index} isReversed={isReversed} text={card.name} aversImage={card.image} />
          })
        }
        </HandContainer>
        <HandContainer>

        {
          playerCards.map((card, index) => {
            return <StyledCard key={index} text={card.name} image={card.image}/>
          })
        }
        </HandContainer>
      </MiddleContainer>

      <SideContainer>
      </SideContainer>

    </GameContainer> : <Preloader />
  )
}
