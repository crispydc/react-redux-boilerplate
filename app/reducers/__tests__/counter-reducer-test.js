import {increment, decrement, startAsyncIncrement, endAsyncIncrement} from '../../actions/counter-actions';
import counterReducer from '../counter-reducer';

jest.unmock('../counter-reducer');

const startState = {
  count: 3,
  inAsync: false
};

describe('counter-reducer tests', () => {
  it('handles initial state & empty action', () => {
    expect(counterReducer()).toEqual({count: 0, inAsync: false});
  });

  it('handles increment action', () => {
    expect(counterReducer(startState, increment())).toEqual({count: 4, inAsync: false});
  });

  it('handles decrement action', () => {
    expect(counterReducer(startState, decrement())).toEqual({count: 2, inAsync: false});
  });

  it('handles async start action', () => {
    expect(counterReducer(startState, startAsyncIncrement())).toEqual({count: 3, inAsync: true});
  });

  it('handles async end action', () => {
    const asyncState = Object.assign(startState, {inAsync: true});
    expect(counterReducer(asyncState, endAsyncIncrement())).toEqual({count: 3, inAsync: false});
  });
});
