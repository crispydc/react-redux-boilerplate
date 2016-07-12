import './sass/app.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';

import App from './components/app';
import Uikit from './components/uikit';
import HeroesPage from './components/heroes/heroes-page';
import LoginPage from './components/login/login-page';
import DetailsPage from './components/details/details-page';
import FormPage from './components/form/form-page';

//root render
ReactDOM.render(
    <Router>
    <Route path="/" component={App}>
        <Route path="uikit" component={Uikit}/>
        <Route path="heroes" component={HeroesPage}/>
        <Route path="login" component={LoginPage}/>
        <Route path="details" component={DetailsPage}/>
        <Route path="form" component={FormPage}/>
    </Route>
</Router>, document.getElementById('app'));
