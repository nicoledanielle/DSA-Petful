import {createStore, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {combineReducers} from 'index';

const enhancer = composeWithDevTools(
  applyMiddleware(thunk)
)
export default createStore(combineReducers, enhancer);