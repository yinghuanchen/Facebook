import { connect } from 'react-redux';
import React from 'react';
import NewsFeed from './newsfeed';

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
});

// const mDTP = (dispatch) => ({
// });

export default connect(mSTP, null)(NewsFeed);