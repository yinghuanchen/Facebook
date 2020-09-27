import { connect } from 'react-redux';
import React from 'react';
import FriendRequest from './friend_request';
import { sendFriendRequest, deleteFriendRequest, fetchUser } from '../../../../actions/user_action';
import {withRouter} from 'react-router-dom';

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    requesteeId: ownProps.userId
});

const mDTP = (dispatch) => ({
    sendFriendRequest: (requesteeId) => dispatch(sendFriendRequest(requesteeId)), 
    deleteFriendRequest: (requesterId, requesteeId) => dispatch(deleteFriendRequest(requesterId, requesteeId)), 
    fetchUser: (requesteeId) => dispatch(fetchUser(requesteeId)),
});

export default connect(mSTP, mDTP)(FriendRequest);
