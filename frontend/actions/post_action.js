import * as PostAPIUtil from '../util/post_api_util';
import * as LikeAPIUtil from '../util/like_api_util'; 
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST"; 

const receiveAllPosts = (posts) => ({
    type: RECEIVE_POSTS,
    posts
});

const receivePost = (post) => ({
    type: RECEIVE_POST,
    post
});

const removePost = (postId) => ({
    type: REMOVE_POST,
    postId
});
// post: information about index_type and wall_id
export const fetchAllPosts = (payload) => (dispatch) => (
    PostAPIUtil.fetchAllPosts(payload).then(posts => dispatch(receiveAllPosts(posts)))
);


export const fetchPost = (postId) => (dispatch) => (
    PostAPIUtil.fetchPost(postId).then(post => dispatch(receivePost(post)))
);

export const createPost = (post) => (dispatch) => (
    PostAPIUtil.createPost(post).then(post => dispatch(receivePost(post)))
);

export const updatePost = (post) => (dispatch) => (
    PostAPIUtil.updatePost(post).then(post => dispatch(receivePost(post)))
);

export const deletePost = (postId) => (dispatch) => (
    PostAPIUtil.deletePost(postId).then(post => dispatch(removePost(postId)))
);

export const createlike = (like) => (dispatch) => (
    LikeAPIUtil.createlike(like).then(post => dispatch(receivePost(post)))
); 

export const deletelike = (like) => (dispatch) => (
    LikeAPIUtil.deletelike(like).then(post => dispatch(receivePost(post)))
); 