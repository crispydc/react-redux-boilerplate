export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const START_ASYNC_INCREMENT = 'START_ASYNC_INCREMENT';
export const END_ASYNC_INCREMENT = 'END_ASYNC_INCREMENT';

export function increment() {
  return {type: INCREMENT}
}

export function decrement() {
  return {type: DECREMENT};
}

export function startAsyncIncrement() {
  return {type: START_ASYNC_INCREMENT};
}

export function endAsyncIncrement() {
  return {type: END_ASYNC_INCREMENT};
}

export function asyncIncrement() {
  //use thunk middleware to be able to dispatch other actions from this one
  return dispatch => {

    //update state to mark async start
    dispatch(startAsyncIncrement());

    setTimeout(() => {
      dispatch(increment());
      dispatch(endAsyncIncrement());
    }, 2000)
  }

}
