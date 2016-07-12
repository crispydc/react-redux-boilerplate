import ErrorReducer from '../error-reducer';
import {throwError, clearError} from'../../actions/error-actions';

jest.unmock('../error-reducer');
jest.unmock('../../actions/error-actions');

describe('error-reducer tests', () => {

  it('returns null as initial state', () => {
    expect(ErrorReducer()).toBeNull();
  });

  it('sets error on THROW_ERROR', () => {
    expect(ErrorReducer(null, throwError('my error'))).toEqual('my error');
  });

  it('clears error on CLEAR_ERROR', () => {
    expect(ErrorReducer('existing error', clearError())).toBeNull();
  });

});
