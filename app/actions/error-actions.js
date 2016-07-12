export const THROW_ERROR = 'THROW_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';

export function throwError(error) {
  return {
    type: THROW_ERROR,
    error
  }
}

export function clearError() {
  return {type: CLEAR_ERROR};
}
