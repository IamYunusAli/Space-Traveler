const FETCH_ROCKETS = 'FETCH_ROCKETS';
const URL = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = async (dispatch) => {
  const response = await fetch(URL);
  const data = await response.json();
  dispatch({ type: FETCH_ROCKETS, payload: data });
};

const initstate = [];
const rocketReduce = (state = initstate, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return action.payload;
    default:
      return state;
  }
};

export default rocketReduce;
