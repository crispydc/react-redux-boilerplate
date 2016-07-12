import './sass/app.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import App from './components/app';
import Uikit from './components/uikit';

//root render
ReactDOM.render(
<Router>
	<Route path="/" component={App}>
		<Route path="uikit" component={Uikit} />
	</Route>
</Router>
  ,
  document.getElementById('app')
);
