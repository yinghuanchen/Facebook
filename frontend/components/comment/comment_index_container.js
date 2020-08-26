import {fetchAllComments} from './../../actions/comment_action'; 
import { connect } from 'react-redux';
import CommentIndex from './comment_index';

const mSTP = (state, ownProps) => {
    //debugger
    const post = ownProps.post;
    const comments = ownProps.post.commentIds.map(commentId => state.entities.comments[commentId]).sort((a, b) => {
            const dateA = new Date(a.createdAt);
            const dateB = new Date(b.createdAt);
            return dateA < dateB ? -1 : 1;
    });
    const authors = comments.some(comment => !comment) ? null: comments.map(comment => state.entities.users[comment.authorId]);
    return ({
        post, 
        comments,
        authors,
    })
}

const mDTP = (dispatch) => ({
    fetchAllComments: (postId) => dispatch(fetchAllComments(postId)), 
})

export default connect(mSTP, mDTP)(CommentIndex); 