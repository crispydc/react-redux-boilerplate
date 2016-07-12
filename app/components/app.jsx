import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import Counter from './counter/counter';
import CounterReducer from '../reducers/counter-reducer';
import { Link } from 'react-router';

//combine reducers
const appReducers = combineReducers({
  counter: CounterReducer
});

//create redux logger
const loggerMiddleware = createLogger();

//create store
const store = createStore(appReducers, applyMiddleware(thunkMiddleware, loggerMiddleware));

export default class App extends Component {
	render() {
		return (
			<div className="app">
				<h1>H1 Header</h1>
				<nav>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/uikit">UI Kit</Link></li>
					</ul>
				</nav>
				<div>
					<Provider store={store}>
						<Counter />
					</Provider>
				</div>
				<main>
					{this.props.children}
				</main>
			</div>
		);
	}
}
