class ModifyPostTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :comment_id
    remove_column :posts, :liker_id 

  end
end
