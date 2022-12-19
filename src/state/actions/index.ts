import { DrawedCard } from "../../types/global";
import { PlayerCardActionType, CroupierCardActionType } from "../action-types";

interface DrawPlayerAction {
    type: PlayerCardActionType.DRAW
    payload: DrawedCard[]
}

interface ResetPlayerAction {
    type: PlayerCardActionType.RESET
}

interface DrawCroupierAction {
    type: CroupierCardActionType.DRAW
    payload: DrawedCard[]
}

interface ResetCroupierAction {
    type: CroupierCardActionType.RESET
}


export type PlayerCardsActionType = DrawPlayerAction | ResetPlayerAction 
export type CroupierCardsActionType = DrawCroupierAction | ResetCroupierAction 