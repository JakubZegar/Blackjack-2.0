import { PlayerCardsActionType } from "../actions";
import { DrawedCard } from "../../types/global";

const playerCardReducer = (state: DrawedCard[] = [], action: PlayerCardsActionType) => {
    switch (action.type) {
        case "drawPlayerCard": return [...state, ...action.payload];

        case "resetPlayerCards": return [];

        default: return state;
    }
}

export default playerCardReducer;