import {INCREMENT, DECREMENT, START_ASYNC_INCREMENT, END_ASYNC_INCREMENT,
  increment, decrement, startAsyncIncrement, endAsyncIncrement, asyncIncrement} from '../counter-actions';

jest.unmock('../counter-actions');

describe('counter-actions tests', () => {
  it('creates increment action', () => {
    expect(increment()).toEqual({type: INCREMENT});
  });

  it('creates decrement action', () => {
    expect(decrement()).toEqual({type: DECREMENT});
  });

  it('creates start-async action', () => {
    expect(startAsyncIncrement()).toEqual({type: START_ASYNC_INCREMENT});
  });

  it('creates end-async action', () => {
    expect(endAsyncIncrement()).toEqual({type: END_ASYNC_INCREMENT});
  });

  it('makes async call during FETCH_APP_CATALOG', () => {
    const action = asyncIncrement();
    expect(typeof action === 'function').toBe(true);
    const dispatchSpy = jasmine.createSpy('dispatch');
    action(dispatchSpy);
    expect(dispatchSpy).toHaveBeenCalledWith(startAsyncIncrement());
    jest.runAllTimers();
    expect(dispatchSpy).toHaveBeenCalledWith(increment());
    expect(dispatchSpy).toHaveBeenCalledWith(endAsyncIncrement());
  });
});
