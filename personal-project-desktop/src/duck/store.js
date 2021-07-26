import { createStore, combineReducers } from 'redux';
// applyMiddleware for redux import if I use the promise middleware
// import promiseMiddleware from 'redux-promise-middleware';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
});

export default createStore(rootReducer);

// , applyMiddleware(promiseMiddleware)
