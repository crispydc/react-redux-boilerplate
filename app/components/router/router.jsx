import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {changePage, PageTypes} from '../../actions/router-actions';
import {clearError} from '../../actions/error-actions';

import Home from '../home/home';
import LoginPage from '../login/login';
import DetailPage from '../details/details';
import FormPage from '../form/form';

export class AppRouter extends Component {
  constructor(props) {
    super(props);

    //setup scoping
    this.onLocationHashChange = this.onLocationHashChange.bind(this);

    //setup event handler and handle initial route
    window.addEventListener('hashchange', this.onLocationHashChange);
  }

  /**
  * Updates the page when the URL hash changes
  */
  onLocationHashChange() {
    this.props.dispatch(changePage());
  }

  /**
   * Main React render method
   */
  render() {

    //check for global error
    if(this.props.error) {
      alert(`There was an error: ${this.props.error}`);
      this.props.dispatch(clearError()); //remove the error now that it's been handled
    }

    console.log('CHANGE PAGE');//xxx
    console.log(this.props.currentPage);//xxx

    //determine what we should be showing
    switch(this.props.currentPage) {
      case PageTypes.HOME:
        return <Home />;
      case PageTypes.LOGIN:
        return <LoginPage />;
      case PageTypes.DETAILS:
        return <DetailPage />;
      case PageTypes.FORM:
        return <FormPage />;
      default:
        return (<h1>Page Not Found</h1>);
    }
  }
}

/**
 * Apply PropTypes to enforce expected props are passed
 */
AppRouter.propTypes = {
  currentPage: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
}

/**
 * Maps Redux application state to this components props
 * @param  {Object} state Redux application state
 * @return {Object}       Component props assigned from Redux application state
 */
export function mapStateToProps(state) {
  return {
    currentPage: state.router.currentPage,
    error: state.error
  }
}

/**
 * Use Redux connect function generator to connect this component to Redux store.
 * This will automatically apply the props defined in mapStateToProps along with dispatch method
 */
export default connect(mapStateToProps)(AppRouter);
