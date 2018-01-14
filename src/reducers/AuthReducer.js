import { TYPE_LOGIN, TYPE_LOGOUT } from '../actions/AuthActions';

const DEFAULT_STATE = {
    loggedIn: false,
    username: null,
    error: null
};

export default (state = DEFAULT_STATE, { type, payload }) => {
    switch (type) {
        case TYPE_LOGIN:
            return {
                loggedIn: true,
                username: payload.username
            };
        case TYPE_LOGOUT:
            return {
                loggedIn: false,
                username: null
            };
        default:
            return state;
    }
};
