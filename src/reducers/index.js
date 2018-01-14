import { combineReducers } from 'redux';
import navReducer from './NavReducer';
import stackoverflowReducer from './StackoverflowReducer';
import authReducer from './AuthReducer';

const rootReducer = combineReducers({
    stackoverflow: stackoverflowReducer,
    auth: authReducer,
    nav: navReducer
});

export default rootReducer;
