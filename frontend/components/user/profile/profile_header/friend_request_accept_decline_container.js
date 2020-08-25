import { connect } from 'react-redux';
import React from 'react';
import FriendRequestAcceptDecline from './friend_request_accept_deline';
import { addFriendship, deleteFriendRequest } from '../../../../actions/user_action';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    requesterId: ownProps.userId
});

const mDTP = (dispatch) => ({
    addFriendship: (friendship) => dispatch(addFriendship(friendship)),
    deleteFriendRequest: (requesterId, requesteeId) => dispatch(deleteFriendRequest(requesterId, requesteeId))
});

export default connect(mSTP, mDTP)(FriendRequestAcceptDecline);