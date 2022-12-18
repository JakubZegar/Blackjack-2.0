import { DrawedCard } from "../../types/global";
import { CardActionType } from "../action-types";

interface DrawAction {
    type: CardActionType.DRAW
    payload: DrawedCard[]
}

interface ResetAction {
    type: CardActionType.RESET
}

export type CardsAction = DrawAction | ResetAction 