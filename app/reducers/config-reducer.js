import {SET_APP_CONFIG} from '../actions/config-actions';

const initialState = {
  isReady: false,
  settings: {}
};

export default function ConfigReducer (state = initialState, action = {}) {
  switch(action.type) {
    case SET_APP_CONFIG:
      return ({
        isReady: true,
        settings: action.config
      });
    default:
      return state;
  }
}
