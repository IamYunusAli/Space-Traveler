import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_MISSIONS = 'Space-Traveler/missions/GET_MISSIONS';

export const getMissions = createAsyncThunk(GET_MISSIONS, async () => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();
  return data;
});

const initialState = [];
const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_MISSIONS}/fulfilled`:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default missionsReducer;
