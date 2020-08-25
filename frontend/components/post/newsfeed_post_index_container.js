import PostIndex from './post_index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchAllPosts } from '../../actions/post_action';
import { fetchUser } from '../../actions/user_action';

const mSTP = (state) => ({
    indexType: 'newsfeed',
    wall: state.entities.users[state.session.id],
    posts: Object.values(state.entities.posts).sort((a, b) => {
        const dateA = new Date(a.created_at);
        const dateB = new Date(b.created_at);
        return dateA > dateB ? -1 : 1;
    }),
});

const mDTP = dispatch => ({
    fetchAllPosts: (payload) => dispatch(fetchAllPosts(payload)),
    fetchUser: (userId) => dispatch(fetchUser(userId))
});

export default withRouter(connect(mSTP, mDTP)(PostIndex));