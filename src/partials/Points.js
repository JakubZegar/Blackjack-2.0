import React, {useState, useEffect, useCallback} from 'react'
import { PointsWrapper } from './components/GameElements';

function Points({cards, player = false, isCroupierCardReversed = false, setPointMethod}) {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    console.log('Points renders');
  });

  const countPoints = useCallback((card) => {
    let [points, alternativePoints] = [0,0]

    if(card.value === "ACE") {
      points = 1;
      alternativePoints=11;
    } else if (card.value === "QUEEN" || card.value === "JACK" || card.value === "KING") {
      points = 10;
      alternativePoints = 10;
    } else {
      points = parseInt(card.value)
      alternativePoints = parseInt(card.value)
    }

    return [points, alternativePoints]
  },[]);

  useEffect(() => {
    if(cards.length > 0){
      let [sumPoints, sumAlternativePoints] = [0,0]
      
      if(isCroupierCardReversed === true || player === true) {
        cards.map((card) => {
          let cardValues = countPoints(card)
          sumPoints += cardValues[0];
          sumAlternativePoints += cardValues[1]
          return null;
        })
      } else {
        let cardValues = countPoints(cards[0])
        sumPoints += cardValues[0];
        sumAlternativePoints += cardValues[1]
      }

      if(sumAlternativePoints > 0 && sumAlternativePoints <= 21){
        setPoints(() => {return sumAlternativePoints})
      } else if (sumPoints > 0) {
        setPoints(() => {return sumPoints})
      }

    }
        
  }, [cards, isCroupierCardReversed, player, countPoints])

  useEffect(() => {
    if(points !== 0){
      console.log("policzyliśmy punkty: ", points);
      setPointMethod(points)
    }
  }, [points, setPointMethod])


  
  return (
    <PointsWrapper>
        {points}
    </PointsWrapper>
  ) 
}

export default Points