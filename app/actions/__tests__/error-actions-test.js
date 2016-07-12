import {throwError, THROW_ERROR, clearError, CLEAR_ERROR} from '../error-actions';

jest.unmock('../error-actions');

describe('error-actions tests', () => {
  it('creates throw_error action', () => {
    expect(throwError('testtest')).toEqual({type:THROW_ERROR, error: 'testtest'});
  });

  it('creates clear_error action', () => {
    expect(clearError()).toEqual({type:CLEAR_ERROR});
  });
});
