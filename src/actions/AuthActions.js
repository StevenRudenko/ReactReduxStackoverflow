const TYPE_PREFIX = 'AUTH';
export const TYPE_LOGIN = `${TYPE_PREFIX}:LOGIN`;
export const TYPE_LOGOUT = `${TYPE_PREFIX}:LOGOUT`;

export function login(username, password) {
    return (dispatch) => {
        dispatch({
            type: TYPE_LOGIN,
            payload: {
                username,
                password
            }
        });
    };
}

export function logout() {
    return (dispatch) => {
        dispatch({
            type: TYPE_LOGOUT
        });
    };
}
