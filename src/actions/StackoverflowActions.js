import axios from 'axios';

const TYPE_PREFIX = 'STACKOVERFLOW';
export const TYPE_QUESTIONS_LOADING = `${TYPE_PREFIX}:QUESTIONS_LOADING`;
export const TYPE_QUESTIONS_FETCHED = `${TYPE_PREFIX}:QUESTIONS_FETCHED`;
export const TYPE_QUESTIONS_LOADED_MORE = `${TYPE_PREFIX}:QUESTIONS_LOADED_MORE`;
export const TYPE_QUESTIONS_ERROR = `${TYPE_PREFIX}:QUESTIONS_ERROR`;

const API_KEY = 'NaT81W3XjVhsBfbRkGpfSw((';
const ROOT_URL = `https://api.stackexchange.com/2.2/search?key=${API_KEY}&site=stackoverflow&order=desc&sort=creation&filter=default`;

export function fetchQuetions(term, page = 1) {
    return (dispatch) => {
        dispatch({ type: TYPE_QUESTIONS_LOADING });
        axios.get(`${ROOT_URL}&intitle=${term}&page=${page}`)
            .then(data => {
                dispatch({
                    type: page === 1 ? TYPE_QUESTIONS_FETCHED : TYPE_QUESTIONS_LOADED_MORE,
                    payload: {
                        page,
                        response: data
                    }
                });
            })
            .catch(error => {
                dispatch({ type: TYPE_QUESTIONS_ERROR, payload: error });
            });
    };
}
