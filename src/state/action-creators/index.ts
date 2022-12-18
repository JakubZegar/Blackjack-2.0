import { DrawedCard } from "../../types/global";
import { CardActionType } from "../action-types";
import { Dispatch } from 'redux'
import { CardsAction } from "../actions";

export const drawCards = (cards: DrawedCard[]) => {
    return (dipsatch: Dispatch<CardsAction>) => {
        dipsatch({
            type: CardActionType.DRAW,
            payload: cards
        })
    }
}

export const resetCards = () => {
    return (dipsatch: Dispatch<CardsAction>) => {
        dipsatch({
            type: CardActionType.RESET
        })
    }
}