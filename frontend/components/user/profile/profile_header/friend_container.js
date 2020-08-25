import { connect } from 'react-redux';
import React from 'react';
import Friend from './friend';
import { deleteFriendship } from '../../../../actions/user_action';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    friendId: ownProps.userId
});

const mDTP = (dispatch) => ({
    deleteFriendship: (friendship) => dispatch(deleteFriendship(friendship)),
});

export default connect(mSTP, mDTP)(Friend);