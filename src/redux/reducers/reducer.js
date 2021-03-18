

// reducers/index.jsjs
import { combineReducers } from 'redux';
import exampleReducers from './reducerFetchData';

const reducers = combineReducers({
	posts: exampleReducers,
});

export default (state, action) => reducers(state, action);