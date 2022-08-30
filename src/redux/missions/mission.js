import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_MISSIONS = 'Space-Traveler/missions/GET_MISSIONS';

export const getMissions = createAsyncThunk(GET_MISSIONS, async () => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();
  const arr = [];
  const keys = Object.keys(data);
  keys.map((key) => (
    arr.push({
      mission_id: data[key].mission_id,
      mission_name: data[key].mission_name,
      description: data[key].description,
    })
  ));

  return arr;
});

const initialState = [];
const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_MISSIONS}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export default missionsReducer;
