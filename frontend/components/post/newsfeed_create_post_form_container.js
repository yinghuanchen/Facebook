import PostForm from './post_form';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {createPost} from '../../actions/post_action';
import {fetchUser} from '../../actions/user_action';

const mSTP = (state, ownProps) => ({
    wallType: 'newsfeed',
    postType: 'create',
    currentUser: state.entities.users[state.session.id], 
    wall: state.entities.users[state.session.id] 
});

const mDTP = dispatch => ({
    action: (post) => dispatch(createPost(post)),
    fetchUser: (userId) => dispatch(fetchUser(userId))
});

export default withRouter(connect(mSTP, mDTP)(PostForm));