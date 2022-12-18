import {combineReducers} from 'redux';
import cardReducer from './cardsReducer'

const reducers = combineReducers({
    card: cardReducer,
})

export default reducers;