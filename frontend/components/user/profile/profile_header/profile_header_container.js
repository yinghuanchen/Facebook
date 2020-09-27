import { connect } from 'react-redux';
import React from 'react';
import ProfileHeader from './profile_header';
import { fetchAllUsers, fetchUser, updateUser, updateUserPhoto } from '../../../../actions/user_action';
import {withRouter} from 'react-router-dom';


const mSTP = (state, ownProps) => {
    const user = state.entities.users[ownProps.match.params.userId];
    const friendList = user ? user.friendIds.map(friendId => state.entities.users[friendId]) : null;
    return {
        currentUser: state.entities.users[state.session.id],
        user,
        friendList,
    };
};

const mDTP = (dispatch) => ({
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    updateUser: (user) => dispatch(updateUser(user)),
    updateUserPhoto: (userId, formData) => dispatch(updateUserPhoto(userId, formData))
});

export default withRouter(connect(mSTP, mDTP)(ProfileHeader));