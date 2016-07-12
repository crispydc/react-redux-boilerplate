import {RECEIVE_HEROES} from '../actions/app-actions';

const initialState = {
  heroes: {},
  lastUpdated: 0
};

export default function NetworkReducer (state = initialState, action = {}) {
  switch(action.type) {

    case RECEIVE_HEROES:
      return Object.assign({}, state, {
        heroes: action.heroes
      });

    default:
      return state;
  }
}
