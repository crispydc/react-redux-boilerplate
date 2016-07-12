import React from 'react';
import {shallow} from 'enzyme';

jest.unmock('../router');
jest.unmock('../../../actions/router-actions');

import {AppRouter, mapStateToProps} from '../router'; //make sure to import the non-redux decorated component!
import HomePage from '../../home/home';
import LoginPage from '../../login/login';
import DetailPage from '../../details/details';
import FormPage from '../../form/form';
import {PageTypes, changePage} from '../../../actions/router-actions';

describe('<AppRouter />', () => {

  it('outputs home', () => {
    const wrapper = shallow(<AppRouter currentPage={PageTypes.HOME} dispatch={() => { /*noop*/ }} />);
    expect(wrapper.find(HomePage).length).toBe(1);
  });

  it('outputs login', () => {
    const wrapper = shallow(<AppRouter currentPage={PageTypes.LOGIN} dispatch={() => { /*noop*/ }} />);
    expect(wrapper.find(LoginPage).length).toBe(1);
  });

  it('outputs details', () => {
    const wrapper = shallow(<AppRouter currentPage={PageTypes.DETAILS} dispatch={() => { /*noop*/ }} />);
    expect(wrapper.find(DetailPage).length).toBe(1);
  });

  it('outputs form', () => {
    const wrapper = shallow(<AppRouter currentPage={PageTypes.FORM} dispatch={() => { /*noop*/ }} />);
    expect(wrapper.find(FormPage).length).toBe(1);
  });

  it('attaches correct handler to hashchange event', () => {
    spyOn(window, 'addEventListener');
    const wrapper = shallow(<AppRouter currentPage={PageTypes.HOME} dispatch={() => { /*noop*/ }} />);
    expect(window.addEventListener).toHaveBeenCalledWith('hashchange', wrapper.instance().onLocationHashChange);
  });

  it('calls dispatch method on from hashchange handler', () => {
    const dispatchSpy = jasmine.createSpy();
    const wrapper = shallow(<AppRouter currentPage={PageTypes.HOME} dispatch={dispatchSpy} />);
    wrapper.instance().onLocationHashChange();
    expect(dispatchSpy).toHaveBeenCalledWith(changePage())
  });

  it('maps redux state to props', () => {
    const state = {router: {currentPage: 6}};
    expect(mapStateToProps(state)).toEqual({currentPage: 6});
  })
});
