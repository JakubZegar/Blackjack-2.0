import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { mainLink, drawTwoCardsLink, drawOneCardLink } from '../const/api';
import { StyledCard } from './components/GameElements';
import { Preloader } from './components/Preloader';

export default function GameInterface({deck}) {

  const [playerCards, setPlayserCards] = useState([])


  useEffect(() => {
    axios.get(mainLink + deck + drawTwoCardsLink).then((result) => {
      setPlayserCards(() => {return result.data.cards})
    })
  }, [deck])

  const drawOneCard = () => {
    console.log("drawing...");
    axios.get(mainLink + deck + drawOneCardLink).then((result) => {
      setPlayserCards((playerCards) => {return [...playerCards, ...result.data.cards]})
    })

  }

  useEffect(() => {
    console.log(playerCards);
  }, [playerCards])
  
  

  return (
    playerCards.length > 0 ? 
    <div>
        {
          playerCards.map((card, index) => {
            return <StyledCard key={index} text={card.name} image={card.image}/>
          })
        }
        <button onClick={drawOneCard} >Dobierz karty</button>
    </div> : <Preloader />
  )
}
