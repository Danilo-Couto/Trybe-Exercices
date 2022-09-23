import { combineReducers } from 'redux';
import { SELECT_MOVIE } from '../actions';

const INITIAL_STATE = {
    selectedCategory: '',
    selectedMovie: '',
}

function moviesReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SELECT_MOVIE:
            return {
                ...state, 
                selectedCategory: action.payload.category,
                selectedMovie: action.payload.movie,
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({movies: moviesReducer});
export default rootReducer;