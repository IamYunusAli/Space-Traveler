import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import missionsReducer from './missions/mission';

const rootReducer = combineReducers({ missions: missionsReducer });

const store = configureStore({ reducer: rootReducer, middleware: [thunk] });

export default store;
