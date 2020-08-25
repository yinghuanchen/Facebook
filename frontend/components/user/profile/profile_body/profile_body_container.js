import { connect } from 'react-redux';
import React from 'react';
import ProfileBody from './profile_body';
import { fetchAllPosts } from '../../../../actions/post_action';
import { withRouter } from 'react-router-dom';


const mSTP = (state, ownProps) => ({
    indexType: 'wall',
    user: state.entities.users[ownProps.match.params.userId],
});

const mDTP = (dispatch) => ({
    fetchAllPosts: (payload) => dispatch(fetchAllPosts(payload)),
});

export default withRouter(connect(mSTP, mDTP)(ProfileBody));