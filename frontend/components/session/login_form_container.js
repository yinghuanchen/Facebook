import { connect } from 'react-redux';
import React from 'react';
import { login, signup } from '../../actions/session_actions';
import LogInForm from './login_form';
const mSTP = (state) => ({
    errors: state.errors.session, 
    currentUser: state.session.id
});

const mDTP = (dispatch) => ({
    login: (user) => dispatch(login(user)), 
});

export default connect(mSTP, mDTP)(LogInForm); 
