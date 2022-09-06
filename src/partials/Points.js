import React, {useState, useEffect} from 'react'
import { PointsWrapper } from './components/GameElements';

function Points({cards, player = false, isCroupierCardReversed = false, setPointMethod}) {
  const [points, setPoints] = useState(0);
  const [alternativePoints, setAlternativePoints] = useState(0);

  useEffect(() => {
    if(cards.length > 0){
      setPoints(() => {return 0})
      setAlternativePoints(() => {return 0})
      
      if(isCroupierCardReversed === true || player === true) {
        
        cards.map((card) => {
          return countPoints(card)
        })
      } else {
        countPoints(cards[0])
      }
    }

    // setPointMethod(alternativePoints <= 21 ? alternativePoints : points);
        
  }, [cards, isCroupierCardReversed, player])

  useEffect(() => {
    setPointMethod(alternativePoints <= 21 ? alternativePoints : points)
  }, [points, alternativePoints, setPointMethod])

  const countPoints = (card) => {
    if(card.value === "ACE") {
      setPoints((points) => {return points + 1})
      setAlternativePoints((points) => {return points + 11})
    } else if (card.value === "QUEEN" || card.value === "JACK" || card.value === "KING") {
        
      setPoints((points) => {return points + 10})
      setAlternativePoints((points) => {return points + 10})
    } else {
      setPoints((points) => {return points + parseInt(card.value)})
      setAlternativePoints((points) => {return points + parseInt(card.value)})
    }
  }
  
  return (
    <PointsWrapper>
        {alternativePoints <= 21 ? alternativePoints : points}
    </PointsWrapper>
  ) 
}

export default Points