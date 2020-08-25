json.key_format! camelize: :lower
json.extract! user, :id, :username, :email, :gender, :friend_ids, :requester_ids, :requestee_ids, :authored_post_ids, :wall_post_ids
json.cover_photo user.cover_photo.attached? ? url_for(user.cover_photo) : ""
json.profile_picture user.profile_picture.attached? ? url_for(user.profile_picture) : ""