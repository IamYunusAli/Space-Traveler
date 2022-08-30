import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import dragonReduce from './dragons/dragon';

const rootReducer = combineReducers({
  dragon: dragonReduce,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
