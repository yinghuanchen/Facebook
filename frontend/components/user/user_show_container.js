import { connect } from 'react-redux';
import React from 'react';
import UserShow from './user_show'; 
import { fetchUser, fetchAllUsers, updateUser, updateUserPhoto } from '../../actions/user_action'; 


const mSTP = (state, ownProps) => { 
    const user = state.entities.users[ownProps.match.params.userId]; 
    const friendList = user ?  user.friendIds.map(friendId => state.entities.users[friendId]) : null;
   return {
       currentUser: state.entities.users[state.session.id],
       user,
       friendList, 
   };
};

const mDTP = (dispatch) => ({
    fetchAllUsers: () => dispatch(fetchAllUsers()), 
    updateUser: (user) => dispatch(updateUser(user)), 
    updateUserPhoto: (userId, formData) => dispatch(updateUserPhoto(user)), 
    fetchUser: (userId) => dispatch(fetchUser(userId))
});

export default connect(mSTP, mDTP)(UserShow);
