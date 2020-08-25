import {fetchAllComments} from './../../actions/comment_action'; 
import { connect } from 'react-redux';
const mSTP = (state, ownProps) => ({
    post: ownProps.post, 
    comments: post.comment_ids.map(commentId => state.entities.comments[commentId]).sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateA < dateB ? -1 : 1;
    }), 

})



const mDTP = (dispatch) => ({
    fetchAllComments: (postId) => dispatch(fetchAllComments(postId)), 
})