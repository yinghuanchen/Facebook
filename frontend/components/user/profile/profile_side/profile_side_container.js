import { connect } from 'react-redux';
import React from 'react';
import ProfileSide from './profile_side';
import { fetchAllUsers } from '../../../../actions/user_action';
import { withRouter } from 'react-router-dom';


const mSTP = (state, ownProps) => {
    const user = state.entities.users[ownProps.match.params.userId];
    const friendList = user && Object.values(state.entities.users).length > 2 ? user.friendIds.map(friendId => state.entities.users[friendId]) : null;
    return {
        currentUser: state.entities.users[state.session.id],
        user,
        friendList,
    };
};

const mDTP = (dispatch) => ({
    fetchAllUsers: () => dispatch(fetchAllUsers()),
});

export default withRouter(connect(mSTP, mDTP)(ProfileSide));