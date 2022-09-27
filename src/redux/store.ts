import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { counterReducer } from './counter-reducer';

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    counter: counterReducer 
})
export const store = configureStore({
    reducer: rootReducer
})
