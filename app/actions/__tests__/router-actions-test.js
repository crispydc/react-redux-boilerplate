import {changePage, CHANGE_PAGE} from '../router-actions';

jest.unmock('../router-actions');

describe('router-actions tests', () => {
  it('creates create_page action', () => {
    expect(changePage()).toEqual({type:CHANGE_PAGE});
  })
});
