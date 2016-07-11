import './css/main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app';
import Counter from './components/counter/counter';
import counter from './reducers/counter-reducer';

//create store
const store = createStore(counter);

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
