import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_MISSIONS = 'Space-Traveler/missions/GET_MISSIONS';
const JOIN_MISSIONS = 'Space-Traveler/missions/JOIN_MISSIONS';
const LEAVE_MISSIONS = 'Space-Traveler/missions/LEAVE_MISSIONS';

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

export const joinMissions = (id) => ({
  type: JOIN_MISSIONS,
  payload: id,
});

export const leaveMissions = (id) => ({
  type: LEAVE_MISSIONS,
  payload: id,
});

const initialState = [];
const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_MISSIONS}/fulfilled`:
      return action.payload;
    case JOIN_MISSIONS:
      return state.map((state) => {
        if (state.mission_id === action.payload) {
          return { ...state, reserved: true };
        }
        return state;
      });
    case LEAVE_MISSIONS:
      return state.map((state) => {
        if (state.mission_id === action.payload) {
          return { ...state, reserved: false };
        }
        return state;
      });
    default:
      return state;
  }
};

export default missionsReducer;
