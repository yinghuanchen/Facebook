import PostIndex from './post_index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchAllPosts, fetchPost, createlike, deletelike} from '../../actions/post_action';
import { fetchAllComments } from '../../actions/comment_action';
import { fetchUser } from '../../actions/user_action';

const mSTP = (state) => {
    const posts = Object.values(state.entities.posts).sort((a, b) => {
        const dateA = new Date(a.created_at);
        const dateB = new Date(b.created_at);
        return dateA > dateB ? -1 : 1;
    });
    const authors = posts.some(post => !post) ? null : posts.map(post => state.entities.users[post.authorId]);
    return ({
        indexType: 'newsfeed',
        wall: state.entities.users[state.session.id],
        currentUser: state.entities.users[state.session.id],
        posts, 
        authors 
    })
};

const mDTP = dispatch => ({
    fetchAllPosts: (payload) => dispatch(fetchAllPosts(payload)),
    fetchPost: (postId) => dispatch(fetchPost(postId)),
    fetchAllComments: (postId) => dispatch(fetchAllComments(postId)),
    fetchUser: (userId) => dispatch(fetchUser(userId)), 
    createlike: (like) => dispatch(createlike(like)), 
    deletelike: (like) => dispatch(deletelike(like)), 
});

export default withRouter(connect(mSTP, mDTP)(PostIndex));