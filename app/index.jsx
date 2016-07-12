import './sass/app.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home';
import Uikit from './components/uikit';
import Counter from './components/counter/counter';
import HeroesPage from './components/heroes/heroes-page';
import LoginPage from './components/login/login-page';
import DetailsPage from './components/details/details-page';
import FormPage from './components/form/form-page';

//root render
ReactDOM.render(
    <Router history={hashHistory}>
    <Route path="/" component={App}>
			<IndexRoute component={Home} />
      <Route path="uikit" component={Uikit}/>
      <Route path="heroes" component={HeroesPage}/>
			<Route path="counter" component={Counter} />
      <Route path="login" component={LoginPage}/>
      <Route path="details" component={DetailsPage}/>
      <Route path="form" component={FormPage}/>
    </Route>
</Router>, document.getElementById('app'));
