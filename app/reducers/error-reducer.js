import {THROW_ERROR, CLEAR_ERROR} from '../actions/error-actions';

export default function ErrorReducer(state = null, action = {}) {

  switch(action.type) {

    case THROW_ERROR:
      return action.error;

    case CLEAR_ERROR:
      return null;

    default:
      return state;
  }
}
