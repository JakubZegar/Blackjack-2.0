import {combineReducers} from 'redux';
import playerCardReducer from './playerCardsReducer'
import croupierCardReducer from './croupierCardsReducer'

const reducers = combineReducers({
    playerCard: playerCardReducer,
    croupierCard: croupierCardReducer
})

export default reducers;

export type ReducerStateType = ReturnType<typeof reducers>