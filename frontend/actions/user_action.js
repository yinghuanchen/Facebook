import * as FriendRequestAPIUtil from '../util/friend_request_api_util';
import * as FriendShipAPIUtil from '../util/friendship_api_util'; 
import * as UserAPIUtil from '../util/user_api_util';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USER'; 
export const RECEIVE_SOME_USER = 'RECEIVE_SOME_USER'; 

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
});

const receiveSomeUsers = (users) => ({
    type: RECEIVE_SOME_USER,
    users
});

const receiveAllUsers = (users) => ({
    type: RECEIVE_ALL_USERS,
    users
});



export const sendFriendRequest = (requesteeId) => dispatch => (
    FriendRequestAPIUtil.sendFriendRequest(requesteeId)
        .then(users => dispatch(receiveSomeUsers(users))) 
);

export const deleteFriendRequest = (requesterId, requesteeId) => dispatch => (
    FriendRequestAPIUtil.deleteFriendRequest(requesterId, requesteeId)
        .then(users => dispatch(receiveSomeUsers(users)))
); 

export const addFriendship = (friendship) => dispatch => (
    FriendShipAPIUtil.addFriendship(friendship)
        .then(users => dispatch(receiveSomeUsers(users)))
);

export const deleteFriendship = (friendship) => dispatch => (
    FriendShipAPIUtil.deleteFriendship(friendship)
        .then(users => dispatch(receiveSomeUsers(users)))
);

export const fetchAllUsers = () => dispatch => (
    UserAPIUtil.fetchAllUsers()
        .then(users => dispatch(receiveAllUsers(users)))
);

export const fetchUser = (userId) => dispatch => (
    UserAPIUtil.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
);

export const updateUser = (user) => dispatch => (
    UserAPIUtil.updateUser(userId)
        .then(user => dispatch(receiveUser(user)))
); 
export const updateUserPhoto = (userId, formData) => dispatch => (
    UserAPIUtil.updateUserPhoto(userId, formData)
        .then(user => dispatch(receiveUser(user)))
); 