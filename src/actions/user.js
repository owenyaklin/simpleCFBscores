export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export const RESET = 'RESET';

export const updateUsername = (username) => ({ type: UPDATE_USERNAME, username });
export const reset = () => ({ type: RESET });