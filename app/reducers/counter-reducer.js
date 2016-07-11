import {INCREMENT, DECREMENT, START_ASYNC_INCREMENT, END_ASYNC_INCREMENT} from '../actions/counter-actions';

const initialState = {
  count: 0,
  inAsync: false
}

export default function counter(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {count: state.count + 1});
    case DECREMENT:
      return Object.assign({}, state, {count: state.count - 1});
    case START_ASYNC_INCREMENT:
      return Object.assign({}, state, {inAsync: true});
    case END_ASYNC_INCREMENT:
      return Object.assign({}, state, {inAsync: false});
    default:
      return state;
  }
}
