import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import postsReducer from './post_reducer';
import commentsReducer from './comment_reducer';
const entitiesReducer = combineReducers({
    users: usersReducer, 
    posts: postsReducer,
    comments: commentsReducer 
});

export default entitiesReducer;