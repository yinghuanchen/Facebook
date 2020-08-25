import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT} from '../actions/comment_action';

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    // debugger
    switch (action.type) {
        case RECEIVE_COMMENTS:
            // debugger 
            for(let commentId in action.comments) {
                nextState[commentId] = action.comments[commentId];
            }
            return nextState;
            //return action.comments; 
        case RECEIVE_COMMENT:
            return Object.assign({}, state, { [action.comment.id]: action.comment });
        case REMOVE_COMMENT:  
            delete nextState[action.commentId]
            return nextState;
        default:
            return state;
    }
};

export default commentsReducer;