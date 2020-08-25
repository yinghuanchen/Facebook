json.key_format! camelize: :lower
json.extract! post, :id, :wall_id, :author_id, :comment_ids, :like_ids 