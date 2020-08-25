export const fetchAllComments = (postId) => (
    $.ajax({
        method: 'GET',
        url: `/api/posts/${postId}/comments`,
    })
);

export const fetchComment = (commentId) => (
    $.ajax({
        method: 'GET',
        url: `/api/comments/${commentId}`,
    })
);

// contain body and post_id 
export const createComment = (comment) => (
    $.ajax({
        method: 'POST',
        url: `/api/comments`,
        data: { comment }
    })
);

export const updateComment = (comment) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/comments/${comment.id}`,
        data: { comment }
    })
);

export const deleteComment= (commentId) => (
    $.ajax({
        method: 'delete',
        url: `/api/comments/${commentId}`,
    })
);