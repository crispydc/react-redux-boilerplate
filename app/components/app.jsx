import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import CounterReducer from '../reducers/counter-reducer';import AppReducer from '../reducers/app-reducer';
import ErrorReducer from '../reducers/error-reducer';
import {Link} from 'react-router';

//combine reducers
const appReducers = combineReducers({
  counter: CounterReducer,
  app: AppReducer,
  error: ErrorReducer
});

//create redux logger
const loggerMiddleware = createLogger();

//create store
const store = createStore(appReducers, compose(
  applyMiddleware(thunkMiddleware, loggerMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <h1>H1 Header</h1>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/uikit">UI Kit</Link></li>
                <li><Link to="/heroes">Heroes</Link></li>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/details">Details</Link></li>
                <li><Link to="/form">Form</Link></li>
              </ul>
            </nav>
          <main>
            {this.props.children}
          </main>
        </div>
      </Provider>
    );
  }
}
