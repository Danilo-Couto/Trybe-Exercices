import { REQUEST_ISS_LOCATION_SUCCESS } from '../actions';

const INITIAL_STATE = {
  latitude: 0,
  longitude: 0,
};

const coordinatesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_ISS_LOCATION_SUCCESS:
      return {
        ...state,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
      };
    default:
      return state;
  }
};

export default coordinatesReducer;
