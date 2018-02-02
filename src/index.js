import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './Dashboard';
import registerServiceWorker from './registerServiceWorker';
import Provider from 'react-redux';
import { combineReducers } from 'redux';
import {dogReducer} from '/reducers/dog';
import {catReducer} from '/reducers/cat';

export default combineReducers({
  dogReducer,
  catReducer
})

import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Dashboard />
  </Provider>, 
document.getElementById('root'));
registerServiceWorker();
