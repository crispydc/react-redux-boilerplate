import {RECEIVE_HEROES, RECEIVE_CREATE_SUCCESS, SET_APP_CONFIG} from '../actions/app-actions';

const initialState = {
  heroes: [],
  lastUpdated: 0,
  config: {}
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

    case SET_APP_CONFIG:
      return Object.assign({}, state, {
        config: action.config
      });

    default:
      return state;
  }
}
