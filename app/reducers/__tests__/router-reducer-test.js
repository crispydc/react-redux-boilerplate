import RouterReducer from '../router-reducer';
import {changePage, PageTypes} from '../../actions/router-actions';

jest.unmock('../router-reducer');
jest.unmock('../../actions/router-actions');

describe('router-reducer tests', () => {

  it('sets initiate state to home', () => {
    expect(RouterReducer()).toEqual({currentPage: PageTypes.APP_STORE_HOME});
  })

  it('sets currentPage to home with no hash', () => {
    window.location.hash = '';
    expect(RouterReducer({}, changePage())).toEqual({currentPage: PageTypes.HOME});
  });

  it('sets currentPage to home for #home hash', () => {
    window.location.hash = '#home';
    expect(RouterReducer({}, changePage())).toEqual({currentPage: PageTypes.HOME});
  });

  it('sets currentPage to login for #login hash', () => {
    window.location.hash = '#login';
    expect(RouterReducer({}, changePage())).toEqual({currentPage: PageTypes.LOGIN});
  });

  it('sets currentPage to details for #details hash', () => {
    window.location.hash = '#details';
    expect(RouterReducer({}, changePage())).toEqual({currentPage: PageTypes.DETAILS});
  });

  it('sets currentPage to form for #form hash', () => {
    window.location.hash = '#form';
    expect(RouterReducer({}, changePage())).toEqual({currentPage: PageTypes.FORM});
  });
});
