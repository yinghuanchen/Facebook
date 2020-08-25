export const fetchAllPosts = (post) => (
    $.ajax({
        method: 'GET',
        url: `/api/posts`,
        data: {post}, 
    })
);

export const fetchPost = (postId) => (
    $.ajax({
        method: 'GET',
        url: `/api/posts/${postId}`,
    })
);

// contain body and wall_id 
export const createPost = (post) => (
    $.ajax({
        method: 'POST',
        url: `/api/posts`,
        data: { post }
    })
);

export const updatePost = (post) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/posts/${post.id}`,
        data: { post }
    })
);

export const deletePost = (postId) => (
    $.ajax({
        method: 'delete',
        url: `/api/posts/${postId}`,
    })
);