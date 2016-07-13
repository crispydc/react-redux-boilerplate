import {throwError} from './error-actions';

export const SET_APP_CONFIG = 'SET_APP_CONFIG';

export function setAppConfig(config) {
  return {type: SET_APP_CONFIG, config}
}

export function configureApp() {
  return dispatch => {

    //fetch the config file
    return fetch('/config.json')
    .then((response) => response.text())
    .then((responseText) => JSON.parse(responseText))
    .then((responseJson) => {

      dispatch(setAppConfig(responseJson));
      return responseJson;

    }).catch((error) => {
      //display error to user
      console.error(error);
      dispatch(throwError('App configuration failed!'));
    });
  }
}
