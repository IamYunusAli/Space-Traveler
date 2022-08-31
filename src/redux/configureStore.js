import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import missionsReducer from './missions/mission';
import dragonReduce from './dragons/dragon';

const rootReducer = combineReducers({
  dragon: dragonReduce,
  missions: missionsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
