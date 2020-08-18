import { combineReducers } from 'redux';
import session from './session_errors_reducer';
import sessionErrorsReducer from './session_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer
});

export default errorsReducer;
