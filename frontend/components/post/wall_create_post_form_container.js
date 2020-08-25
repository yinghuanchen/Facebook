import PostForm from './post_form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createPost } from '../../actions/post_action';
import { fetchUser } from '../../actions/user_action';

const mSTP = (state, ownProps) => ({
    wallType: 'wall',
    postType: 'create', 
    currentUser: state.entities.users[state.session.id],
    wall: state.entities.users[ownProps.match.params.userId]
});

const mDTP = dispatch => ({
    action: (post) => dispatch(createPost(post)),
    fetchUser: (userId) => dispatch(fetchUser(userId))
});

export default withRouter(connect(mSTP, mDTP)(PostForm));