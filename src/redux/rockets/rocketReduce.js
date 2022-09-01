const FETCH_ROCKETS = 'FETCH_ROCKETS';
const ADD_RESERVATION = 'ADD_RESERVATION';
const CANCEL_RESERVATION = 'CANCEL_RESERVATION';
const URL = 'https://api.spacexdata.com/v3/rockets';

const structured = (data) => {
  const arr = [];
  data.forEach((element) => {
    const rockets = {};
    rockets.id = element.id;
    rockets.rocket_name = element.rocket_name;
    rockets.type = element.type;
    rockets.description = element.description;
    rockets.flickr_images = element.flickr_images;
    rockets.reserved = false;
    arr.push(rockets);
  });
  return arr;
};

export const fetchRockets = async (dispatch) => {
  const response = await fetch(URL);
  const data = await response.json();
  dispatch({ type: FETCH_ROCKETS, payload: structured(data) });
};

export const addReservation = (id) => ({
  type: ADD_RESERVATION,
  id,
});

export const cancelReservation = (id) => ({
  type: CANCEL_RESERVATION,
  id,
});

const initstate = [];
const rocketReduce = (state = initstate, action) => {
  let newState;
  switch (action.type) {
    case FETCH_ROCKETS:
      return action.payload;
    case ADD_RESERVATION:
      newState = state.map((rocket) => {
        if (rocket.id === action.id) {
          return { ...rocket, reserved: true };
        }
        return rocket;
      });
      return newState;
    case CANCEL_RESERVATION:
      newState = state.map((rocket) => {
        if (rocket.id === action.id) {
          return { ...rocket, reserved: false };
        }
        return rocket;
      });
      return newState;
    default:
      return state;
  }
};

export default rocketReduce;
