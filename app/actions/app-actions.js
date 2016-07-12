/**
 * Defining action type constants
 */
export const GET_HEROES = 'GET_HEROES';
export const RECEIVE_HEROES = 'RECEIVE_HEROES';
export const POST_HERO = 'POST_HERO';
export const RECEIVE_CREATE_SUCCESS = 'RECEIVE_CREATE_SUCCESS';
export const CONFIG_APP = 'CONFIG_APP';
export const SET_APP_CONFIG = 'SET_APP_CONFIG';

/******************** GET ***********************/

export function getHeroes() {
  return {type: GET_HEROES};
}

export function receiveHeroes(responseJson) {
  return {
    type: RECEIVE_HEROES,
    heroes: responseJson,
    receivedAt: Date.now()
  }
}

export function fetchHeroes() {
  //use thunk middleware to be able to dispatch other actions from this one
  return (dispatch, getState) => {
    const endpoint = getState().app.config.endpoint;

    //update state to mark fetch start
    dispatch(getHeroes());

    //return promise that will be evaluated when complete
    return fetch(endpoint + 'heros.json', {
      method: 'GET'
    })
    .then((response) => response.text())
    .then((responseText) => JSON.parse(responseText))
    .then((responseJson) => {
      console.log('fetch success!');

      dispatch(receiveHeroes(responseJson));
      return responseJson;
    });
  }
}

/******************** POST ***********************/

export function postHero() {
  return {type: POST_HERO};
}

export function receivePostSuccess(responseJson) {
  return {
    type: RECEIVE_CREATE_SUCCESS,
    heroes: responseJson,
    receivedAt: Date.now()
  }
}

export function postHeroData(data) {
  //use thunk middleware to be able to dispatch other actions from this one
  return (dispatch, getState) => {

    //get endpoint
    const endpoint = getState().app.config.endpoint;

    //update state to mark fetch start
    dispatch(postHero());

    //return promise that will be evaluated when complete
    var request = new Request(endpoint + 'heros.json', {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(data)
    });

    fetch(request).then((response) => response.text())
    .then((responseText) => JSON.parse(responseText))
    .then((responseJson) => {
      console.log('post success!');

      dispatch(receivePostSuccess(responseJson));
      return responseJson;
    });
  }
}

export function setAppConfig(config) {
  return {type: SET_APP_CONFIG, config}
}

export function configureApp() {
  return dispatch => {
    return fetch('/config.json')
    .then((response) => response.text())
    .then((responseText) => JSON.parse(responseText))
    .then((responseJson) => {
      dispatch(setAppConfig(responseJson));
      return responseJson;
    });
  }
}
