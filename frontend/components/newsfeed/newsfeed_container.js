import { connect } from 'react-redux';
import React from 'react';
import NewsFeed from './newsfeed';
import { fetchUser, fetchAllUsers } from './../../actions/user_action';

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
});

const mDTP = (dispatch) => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)), 
    fetchAllUsers: () => dispatch(fetchAllUsers()),
});

export default connect(mSTP, mDTP)(NewsFeed);