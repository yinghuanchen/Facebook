import { connect } from 'react-redux';
import React from 'react';
import UserShow from './user_show'; 

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
});

export default connect(mSTP, null)(UserShow);
