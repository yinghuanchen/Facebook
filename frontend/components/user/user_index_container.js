import { connect } from 'react-redux';
import React from 'react';
import UserIndex from './user_index';
import { fetchAllUsers } from '../../actions/user_action';
import { withRouter} from 'react-router-dom';
const mSTP = (state) => ({
    users: Object.values(state.entities.users), 
})

const mDTP = (dispatch) => ({
    fetchAllUsers: () => dispatch(fetchAllUsers()) 
});

export default connect(mSTP, mDTP)(UserIndex);
