import PostIndex from './post_index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchAllPosts, fetchPost } from '../../actions/post_action';
import { fetchAllComments, createComment} from '../../actions/comment_action';
import { fetchUser } from '../../actions/user_action';

const mSTP = (state, ownProps) => {
    // debugger
    return ({
        indexType: 'wall',
        wall: state.entities.users[ownProps.match.params.userId],
        posts: Object.values(state.entities.posts).sort((a, b) => {
            const dateA = new Date(a.createdAt);
            const dateB = new Date(b.createdAt);
            return dateA > dateB ? -1 : 1;}),
    })
};

const mDTP = dispatch => ({
    fetchAllPosts: (payload) => dispatch(fetchAllPosts(payload)),
    fetchPost: (postId) => dispatch(fetchPost(postId)),
    fetchAllComments: (postId) => dispatch(fetchAllComments(postId)),
    createComment: (comment) => dispatch(createComment(comment)),
    fetchUser: (userId) => dispatch(fetchUser(userId))
});

export default withRouter(connect(mSTP, mDTP)(PostIndex));