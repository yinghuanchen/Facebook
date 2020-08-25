import * as CommentAPIUtil from './../util/comment_api_util'; 

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT"; 

const receiveAllComments = (comments) => ({
    type: RECEIVE_COMMENTS,
    comments
});

const receiveComment = (comment) => ({
    type: RECEIVE_COMMENT,
    comment
});

const removeComment = (commentId) => ({
    type: REMOVE_COMMENT,
    commentId
});

export const fetchAllComments = (postId) => (dispatch) => (
    CommentAPIUtil.fetchAllComments(postId).then(comments => dispatch(receiveAllComments(comments)))
)


export const fetchComment = (commentId) => (dispatch) => (
    CommentAPIUtil.fetchComment(commentId).then(comment => dispatch(receiveComment(comment)))
)

export const createComment = (comment) => (dispatch) => (
    CommentAPIUtil.createComment(comment).then(comment => dispatch(receiveComment(comment)))
)

export const updateComment = (comment) => (dispatch) => (
    CommentAPIUtil.updateComment(comment).then(comment => dispatch(receiveComment(comment)))
)

export const deleteComment = (commentId) => (dispatch) => (
    CommentAPIUtil.deleteComment(commentId).then(comment => dispatch(removeComment(commentId)))
)