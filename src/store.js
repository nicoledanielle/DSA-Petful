import {createStore, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {combineReducers} from 'redux';
import {dogReducer} from './reducers/dog';
import {catReducer} from './reducers/cat';

const combined = combineReducers({
  dogReducer,
  catReducer
});

const enhancer = composeWithDevTools(
  applyMiddleware(thunk)
)
export default createStore(combined, enhancer);