import PostIndex from './post_index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchAllPosts, fetchPost, updatePost, createlike, deletelike, deletePost} from '../../actions/post_action';
import { fetchAllComments, createComment } from '../../actions/comment_action';
import { fetchUser } from '../../actions/user_action';

const mSTP = (state) => {
    const posts = Object.values(state.entities.posts).sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateA > dateB ? -1 : 1;
    });
    const authors = !posts || posts.some(post => !post) || Object.values(state.entities.users).length < 2 ? null : posts.map(post => state.entities.users[post.authorId]);
    const walls = !posts || posts.some(post => !post) || Object.values(state.entities.users).length < 2 ? null : posts.map(post => state.entities.users[post.wallId]);
    const currentUser = state.entities.users[state.session.id];
    const users = state.entities.users; 
    return ({
        indexType: 'newsfeed',
        wall: state.entities.users[state.session.id],
        currentUser: state.entities.users[state.session.id],
        posts, 
        authors,
        walls,
        currentUser, 
        users
    })
};

const mDTP = dispatch => ({
    fetchAllPosts: (payload) => dispatch(fetchAllPosts(payload)),
    fetchPost: (postId) => dispatch(fetchPost(postId)),
    updatePost: (post) => dispatch(updatePost(post)), 
    fetchAllComments: (postId) => dispatch(fetchAllComments(postId)),
    fetchUser: (userId) => dispatch(fetchUser(userId)), 
    createlike: (like) => dispatch(createlike(like)), 
    deletelike: (like) => dispatch(deletelike(like)), 
    deletePost: (postId) => dispatch(deletePost(postId)), 
    createComment: (comment) => dispatch(createComment(comment))
});

export default withRouter(connect(mSTP, mDTP)(PostIndex));