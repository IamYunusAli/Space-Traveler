const FETCH_DRAGONS = 'FETCH_DRAGONS';
const URL = 'https://api.spacexdata.com/v3/dragons';

export const fetchDragons = async (dispatch) => {
  const response = await fetch(URL);
  const data = await response.json();
  dispatch({ type: FETCH_DRAGONS, payload: data });
};

const initstate = [];
const dragonReduce = (state = initstate, action) => {
  switch (action.type) {
    case FETCH_DRAGONS:
      return action.payload;
    default:
      return state;
  }
};

export default dragonReduce;
