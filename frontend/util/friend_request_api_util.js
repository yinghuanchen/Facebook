export const sendFriendRequest = (requesteeId) => (
    $.ajax({
        method: 'post',
        url: `/api/friend_requests/${requesteeId}`
    })
);

export const deleteFriendRequest = (requesterId, requestee_id) => (
    $.ajax({
        method: 'delete',
        url: `/api/friend_requests/${requesterId}/${requestee_id}` 
    })
);