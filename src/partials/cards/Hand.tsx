import React from 'react'

import { DrawedCard } from '../../types/global';
import { HandContainer, StyledCard } from './CardElements';
import ReversableCard from './ReversableCard';

type Props = {
    cards: DrawedCard[],
    isCardReversed? : boolean;
}

export default function Hand({isCardReversed = true, cards}: Props) {

    const reversedCards: JSX.Element[] = cards.map((card, index) => {
        return <StyledCard key={index} image={card.image} />;
    })
    
    return (
        <HandContainer>
            {
                cards.length <= 2 ? (
                    <>
                        <StyledCard image={cards[0].image} />
                        <ReversableCard aversImage={cards[1].image} isReversed={isCardReversed} />
                    </>
                ) : (
                    reversedCards
                )
            }
        </HandContainer>
    )
}