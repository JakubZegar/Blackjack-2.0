import { CroupierCardsActionType } from "../actions";
import { DrawedCard } from "../../types/global";

const croupierCardReducer = (state: DrawedCard[] = [], action: CroupierCardsActionType) => {
    switch (action.type) {
        case "drawCroupierCard": return [...state, ...action.payload];

        case "resetCroupierCards": return [];

        default: return state;
    }
}

export default croupierCardReducer;