export const addFriendship = (friendship) => (
    $.ajax({
        method: 'post',
        url: `/api/friendships`, 
        data: { friendship}
    })
);

export const deleteFriendship = (friendship) => (
    $.ajax({
        method: 'delete',
        url: `/api/friendships`,
        data: { friendship}
    })
);