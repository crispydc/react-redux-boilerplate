/**
 * Defining action type constants
 */
export const CHANGE_PAGE = 'CHANGE_PAGE';

/**
 * Page types
 */
export const PageTypes = {
  HOME: 0,
  LOGIN: 1,
  DETAILS: 2,
  FORM: 3
}

/**
 * Action Creators
 */
export function changePage() {
  return {type: CHANGE_PAGE};
}
