const FETCH_DRAGONS = 'FETCH_DRAGONS';
const ADD_RESERVATION = 'ADD_RESERVATION';
const CANCEL_RESERVATION = 'CANCEL_RESERVATION';
const URL = 'https://api.spacexdata.com/v3/dragons';

export const fetchDragons = async (dispatch) => {
  const response = await fetch(URL);
  const data = await response.json();
  dispatch({ type: FETCH_DRAGONS, payload: data });
};

export const addReservation = (id) => ({
  type: ADD_RESERVATION,
  id,
});

export const cancelReservation = (id) => ({
  type: CANCEL_RESERVATION,
  id,
})

const initstate = [];
const dragonReduce = (state = initstate, action) => {
  let newState;
  switch (action.type) {
    case FETCH_DRAGONS:
      return action.payload;
    case ADD_RESERVATION:
      newState = state.map((dragon) => {
        if (dragon.id === action.id) {
          return { ...dragon, reserved: true };
        }
        return dragon;
      });
      return newState;
    case CANCEL_RESERVATION:
      newState = state.map((dragon) => {
        if (dragon.id === action.id) {
          return { ...dragon, reserved: false };
        }
        return dragon;
      });
      return newState;
    default:
      return state;
  }
};

export default dragonReduce;
