import { combineReducers } from 'redux';
import coordinatesReducer from './coordinatesReducer';

const rootReducer = combineReducers({
  coordinates: coordinatesReducer,
});

export default rootReducer;
