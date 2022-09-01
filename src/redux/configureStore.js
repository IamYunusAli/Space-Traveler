import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import missionsReducer from './missions/mission';
import dragonReduce from './dragons/dragon';
import rocketReduce from './rockets/rocketReduce';

const rootReducer = combineReducers({
  dragon: dragonReduce,
  missions: missionsReducer,
  rockets: rocketReduce,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
