import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER, RECEIVE_ALL_USERS, RECEIVE_SOME_USER} from '../actions/user_action'; 

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER: 
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_USER:
            return Object.assign({}, state, { [action.user.id]: action.user });
        case RECEIVE_SOME_USER: 
            let nextState = Object.assign({}, state); 
            for(let userId in action.users) {
                nextState[userId] = action.users[userId];
            }
            return nextState; 
        case RECEIVE_ALL_USERS: 
            return action.users; 
        default:
            return state;
    }
};

export default usersReducer;