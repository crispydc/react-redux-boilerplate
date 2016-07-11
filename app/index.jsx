import './css/main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app';
import CounterContainer from './containers/counter';
import counter from './reducers/counter';

//create store
const store = createStore(counter);

//root render
ReactDOM.render(
  <div>
    <App />
    <Provider store={store}>
      <CounterContainer />
    </Provider>
  </div>,
  document.getElementById('app')
);
