import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST } from '../actions/post_action';

const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    //debugger 
    switch (action.type) {
        case RECEIVE_POST:
            return Object.assign({}, state, { [action.post.id]: action.post });
            // for (let postId in action.posts) {
            //     nextState[postId] = action.posts[postId];
            // }
            // return nextState;
        case RECEIVE_POSTS:
            return  action.posts;
        case REMOVE_POST:
            delete nextState[action.postId]
            return nextState;
        default:
            return state;
    }
};

export default postsReducer;