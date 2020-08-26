export const createlike = (like) => (
    $.ajax({
        method: 'POST',
        url: `/api/likes`,
        data: { like }
    })
);

export const deletelike = (like) => (
    $.ajax({
        method: 'delete',
        url: `/api/likes`,
        data: {like}
    })
);