import {RECEIVE_HEROES, RECEIVE_CREATE_SUCCESS} from '../actions/app-actions';

const initialState = {
  heroes: [],
  lastUpdated: 0
};

export default function NetworkReducer (state = initialState, action = {}) {
  switch(action.type) {

    case RECEIVE_HEROES:
      return Object.assign({}, state, {
        heroes: action.heroes
      });

    case RECEIVE_CREATE_SUCCESS:
      return Object.assign({}, state, {
        // heroes: action.heroes
        //TODO: update the hero that was added
      });

    default:
      return state;
  }
}
