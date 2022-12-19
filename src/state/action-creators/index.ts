import { DrawedCard } from "../../types/global";
import { PlayerCardActionType, CroupierCardActionType } from "../action-types";
import { Dispatch } from 'redux'
import { PlayerCardsActionType, CroupierCardsActionType } from "../actions";

export const drawPlayerCards = (cards: DrawedCard[]) => {
    return (dipsatch: Dispatch<PlayerCardsActionType>) => {
        dipsatch({
            type: PlayerCardActionType.DRAW,
            payload: cards
        })
    }
}

export const resetPlayerCards = () => {
    return (dipsatch: Dispatch<PlayerCardsActionType>) => {
        dipsatch({
            type: PlayerCardActionType.RESET
        })
    }
}

export const drawCroupierCards = (cards: DrawedCard[]) => {
    return (dipsatch: Dispatch<CroupierCardsActionType>) => {
        dipsatch({
            type: CroupierCardActionType.DRAW,
            payload: cards
        })
    }
}

export const resetCroupierCards = () => {
    return (dipsatch: Dispatch<CroupierCardsActionType>) => {
        dipsatch({
            type: CroupierCardActionType.RESET
        })
    }
}