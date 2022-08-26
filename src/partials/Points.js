import React, {useState, useEffect} from 'react'
import { PointsWrapper } from './components/GameElements';

function Points({cards}) {
  const [points, setPoints] = useState(0);
  const [alternativePoints, setAlternativePoints] = useState(0);

  useEffect(() => {
    setPoints(() => {return 0})
    setAlternativePoints(() => {return 0})

    cards.map((card) => {
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
        return;
    })
  
  }, [cards])
  
  return (
    <PointsWrapper>
        {alternativePoints <= 21 ? alternativePoints : points}
    </PointsWrapper>
  ) 
}

export default Points