import { fetchAllComments, updateComment, deleteComment, fetchComment} from './../../actions/comment_action'; 
import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { fetchPost} from './../../actions/post_action';


const mSTP = (state, ownProps) => {
    //debugger
    const post = ownProps.post;
    const comments = state.entities.comments ? ownProps.post.commentIds.map(commentId => state.entities.comments[commentId]).sort((a, b) => {
            const dateA = new Date(a.createdAt);
            const dateB = new Date(b.createdAt);
            return dateA < dateB ? -1 : 1;
    }):null;
    const authors = !comments || comments.some(comment => !comment) ? null: comments.map(comment => state.entities.users[comment.authorId]);
    const currentUser = state.entities.users[state.session.id];
    return ({
        post, 
        comments,
        authors,
        currentUser, 
    })
}

const mDTP = (dispatch) => ({
  fetchAllComments: (postId) => dispatch(fetchAllComments(postId)),
  updateComment: (comment) => dispatch(updateComment(comment)),
  deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  fetchComment: (commentId) => dispatch(fetchComment(commentId)),
  fetchPost: (postId) => dispatch(fetchPost(postId)),
});

export default connect(mSTP, mDTP)(CommentIndex); 