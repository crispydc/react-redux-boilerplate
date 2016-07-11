import './css/main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import App from './components/app';
import Counter from './components/counter/counter';
import CounterReducer from './reducers/counter-reducer';

//combine reducers
const appReducers = combineReducers({
  counter: CounterReducer
});

//create redux logger
const loggerMiddleware = createLogger();

//create store
const store = createStore(appReducers, applyMiddleware(thunkMiddleware, loggerMiddleware));

//root render
ReactDOM.render(
  <div>
    <App />
    <Provider store={store}>
      <Counter />
    </Provider>
  </div>,
  document.getElementById('app')
);
