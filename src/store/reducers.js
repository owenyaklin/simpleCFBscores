import { combineReducers } from 'redux';

import { RESET, UPDATE_USERNAME } from "../actions/user"

const initialState = { username: '' };

const user = (user = initialState, action) => {
    switch (action.type) {
        case UPDATE_USERNAME:
            return { username: action.username }
        case RESET:
            return initialState;
        default:
            return user;
    }
}

export default combineReducers({ user });