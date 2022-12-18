import { CardsAction } from "../actions";
import { DrawedCard } from "../../types/global";

const cardReducer = (state: DrawedCard[], action: CardsAction) => {
    switch (action.type) {
        case "draw": {
            return [...state, ...action.payload]
        };

        case "reset": {
            return [];
        };

        default: {
            return state;
        }
    }
}

export default cardReducer;