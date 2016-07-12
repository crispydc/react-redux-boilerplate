/**
 * Defining action type constants
 */
export const GET_HEROES = 'GET_HEROES';
export const RECEIVE_HEROES = 'RECEIVE_HEROES';

/**
 * Action Creators
 */
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
  return dispatch => {
    //update state to mark fetch start
    dispatch(getHeroes());

    //return promise that will be evaluated when complete
    return fetch('http://10.5.56.133:8080/echo_services.json?param=anything', {
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
