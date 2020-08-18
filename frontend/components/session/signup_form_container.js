import { connect } from 'react-redux';
import React from 'react';
import {withRouter} from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SignUpForm from './signup_form';
const mSTP = (state) => ({
    errors: state.errors.session,
    currentUser: state.session.id
});

const mDTP = (dispatch) => ({
    signup: (user) => dispatch(signup(user))
});

export default withRouter(connect(mSTP, mDTP)(SignUpForm)); 
