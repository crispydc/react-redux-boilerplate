import './sass/app.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import App from './components/app';
import RouterReducer from './reducers/router-reducer';
import ErrorReducer from './reducers/error-reducer';
import AppReducer from './reducers/app-reducer';

import AppRouter from './components/router/router';

//combine reducers
const appReducers = combineReducers({
  router: RouterReducer,
  error: ErrorReducer,
  app: AppReducer
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
      <AppRouter />
    </Provider>
  </div>,
  document.getElementById('app')
);
