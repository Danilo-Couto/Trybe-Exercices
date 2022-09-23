import getCurrentISSLocation from '../../services/issAPI';

// action types
export const REQUEST_ISS_LOCATION = 'REQUEST_ISS_LOCATION';
export const REQUEST_ISS_LOCATION_SUCCESS = 'REQUEST_ISS_LOCATION_SUCCESS';
export const REQUEST_ISS_LOCATION_ERROR = 'REQUEST_ISS_LOCATION_ERROR';

// action creators
export const requestISSLocation = () => ({
  type: REQUEST_ISS_LOCATION,
});

export const requestISSLocationSucess = (payload) => ({
  type: REQUEST_ISS_LOCATION_SUCCESS,
  payload,
});

export const requestISSLocationError = (payload) => ({
  type: REQUEST_ISS_LOCATION_ERROR,
  payload,
});

export function requestISSLocationThunk() {
  return (dispatch) => {
    getCurrentISSLocation().then((response) => {
      const coordinates = {
        latitude: Number(response.iss_position.latitude),
        longitude: Number(response.iss_position.longitude),
      };

      dispatch(requestISSLocationSucess(coordinates));
    });
  };
}