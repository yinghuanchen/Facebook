json.key_format! camelize: :lower
json.extract! post, :id, :body, :wall_id, :author, :author_id, :comment_ids, :liker_ids, :created_at, :updated_at