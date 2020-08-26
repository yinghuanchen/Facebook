export const fetchAllUsers = () => (
    $.ajax({
        url: '/api/users', 
        method: "GET"
    })
)

export const fetchUser = (userId) => (
    $.ajax({
        url: `/api/users/${userId}`,
        method: 'GET'
    })
)

export const updateUser = (user) => (
    $.ajax({
        url: `/api/users/${user.id}`,
        method: "PATCH", 
        data: {user}
    })
)

export const updateUserPhoto = (userId, formData) => {
    return (
        $.ajax({
            url: `/api/users/${userId}`,
            method: 'PATCH',
            data: formData,
            contentType: false,
            processData: false
        })
    )
}

export const searchUsers = (query) => (
    $.ajax({
        method: 'get',
        url: `/api/users?query=${query}`
    })
);