import {CHANGE_PAGE, PageTypes} from '../actions/router-actions';

function getPageFromHash() {
  const cHash = window.location.hash.split('?')[0];
  switch(cHash) {
    case '#home':
      return PageTypes.HOME;
    case '#login':
      return PageTypes.LOGIN;
    case '#details':
      return PageTypes.DETAILS;
    case '#form':
      return PageTypes.FORM;
    default:
      return PageTypes.HOME;
  }
}

const initialState = {
  currentPage: getPageFromHash()
}

export default function RouterReducer (state = initialState, action = {}) {
  switch(action.type) {
    case CHANGE_PAGE:
      return Object.assign({}, state, {
        currentPage: getPageFromHash()
      });
    default:
      return state;
  }
}
