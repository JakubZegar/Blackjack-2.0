import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import reducers from './reducers';

export const store = configureStore({
    reducer: reducers
});