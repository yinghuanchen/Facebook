import {  RECEIVE_SEARCH_RESULTS } from '../actions/user_action';

const _nullUi = {
    searchResults: null
};

const uiReducer = (state = _nullUi, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SEARCH_RESULTS:
            return Object.assign({}, state, { searchResults: action.searchResults });
        default:
            return state;
    }

}

export default uiReducer;