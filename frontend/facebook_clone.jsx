import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import {signup, login, logout} from './util/session_api_util';
import { sendFriendRequest, deleteFriendRequest} from './util/friend_request_api_util'; 
import { fetchAllUsers } from './actions/user_action';
import { addFriend, unFriend } from './util/friend_api_util';
import Root from './components/root';
document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    let store; 
    if (window.currentUser) {
        const preloadedState = {
            entities: { users: { [window.currentUser.id]: window.currentUser } },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    // For testing 
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.sendFriendRequest = sendFriendRequest;
    window.deleteFriendRequest = deleteFriendRequest;
    window.addFriend = addFriend;
    window.unFriend = unFriend;
    window.fetchAllUsers = fetchAllUsers;
    // For testing 

    ReactDOM.render(<Root store={store}/>, root);
});