import rootReducer from "./reducer";
import { createStore } from 'redux';
// import { createStore } from 'react-redux';
 
const store = createStore(rootReducer,
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
;

export default store;
