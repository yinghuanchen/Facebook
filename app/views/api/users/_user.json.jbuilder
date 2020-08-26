json.key_format! camelize: :lower
json.extract! user, :id, :username, :email, :gender, :friend_ids, :requester_ids, :requestee_ids, :authored_post_ids, :wall_post_ids
json.cover_photo user.cover_photo.attached? ? url_for(user.cover_photo) : 'https://frankjkenny.com/wp-content/uploads/2012/10/Facebook-Page-Cover.png'
json.profile_picture user.profile_picture.attached? ? url_for(user.profile_picture) : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'