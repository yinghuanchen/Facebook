import { connect } from 'react-redux';
import React from 'react';
import  FriendRequestNotification from './friend_request_notification';
import { fetchUser } from './../../actions/user_action';

const mSTP = (state) => {
    // debugger 
    const currentUser = state.entities.users[state.session.id];
    const requesters = Object.values(state.entities.users).length < 3 ? null : currentUser.requesterIds.map(requesterId => 
        state.entities.users[requesterId] 
    );
    return ({
        currentUser,
        requesters, 
    })
};

const mDTP = (dispatch) => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
});

export default connect(mSTP, mDTP)(FriendRequestNotification);