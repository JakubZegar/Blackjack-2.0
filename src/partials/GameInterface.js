import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { mainLink, drawTwoCardsLink, drawOneCardLink } from '../const/api';
import useFetch from '../hooks/useFetch';
import { StyledCard } from './components/GameElements';
import { Preloader } from './components/Preloader';

export default function GameInterface({deck}) {

  const [playerCards, setPlayserCards] = useState([])


  useEffect(() => {
    axios.get(mainLink + deck.deck_id + drawTwoCardsLink).then((result) => {
      setPlayserCards(() => {return result.data.cards})
    })
  }, [])

  const drawOneCard = () => {
    console.log("drawing...");
    axios.get(mainLink + deck.deck_id + drawOneCardLink).then((result) => {
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
            return <StyledCard key={index} image={card.image}/>
          })
        }
        <button onClick={drawOneCard} >Dobierz karty</button>
    </div> : <Preloader />
  )
}
