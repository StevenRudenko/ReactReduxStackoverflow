import {
    TYPE_QUESTIONS_LOADING,
    TYPE_QUESTIONS_FETCHED,
    TYPE_QUESTIONS_LOADED_MORE,
    TYPE_QUESTIONS_ERROR
} from '../actions/StackoverflowActions';

const DEFAULT_STATE = {
    questions: [],
    page: 1,
    hasMore: true,
    loading: false,
    error: null
};

export default (state = DEFAULT_STATE, { type, payload }) => {
    switch (type) {
        case TYPE_QUESTIONS_LOADING:
            return {
                ...state,
                loading: true,
                error: null
            };
        case TYPE_QUESTIONS_FETCHED:
            return {
                ...state,
                questions: payload.response.data.items,
                page: payload.page,
                hasMore: payload.response.data.has_more,
                loading: false,
                error: null
            };
        case TYPE_QUESTIONS_LOADED_MORE:
            return {
                ...state,
                questions: [...state.questions, ...payload.response.data.items],
                page: payload.page,
                hasMore: payload.response.data.has_more,
                loading: false,
                error: null
            };
        case TYPE_QUESTIONS_ERROR:
            return {
                ...state,
                loading: false,
                error: payload.message
            };
        default:
            return state;
    }
};
