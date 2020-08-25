import { connect } from 'react-redux';
import React from 'react';
import { login, signup, clearErrors } from '../../actions/session_actions';
import LogInForm from './login_form';
const mSTP = (state) => ({
    errors: state.errors.session, 
    currentUser: state.session.id
});

const mDTP = (dispatch) => ({
    login: (user) => dispatch(login(user)), 
    clearErrors: (errors) => dispatch(clearErrors(errors)), 
});

export default connect(mSTP, mDTP)(LogInForm); 
