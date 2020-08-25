class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.text :body, null: false 
      t.integer :author_id, null: false 
      t.integer :wall_id, null: false  
      t.integer :comment_id
      t.integer :liker_id 
      t.timestamps
    end
    add_index :posts, :author_id
    add_index :posts, :wall_id
    add_index :posts, :comment_id
    add_index :posts, :liker_id 
  end
end
