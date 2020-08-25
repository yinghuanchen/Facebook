class CreateFriendships < ActiveRecord::Migration[5.2]
  def change
    create_table :friendships do |t|
      t.integer :user_first_id, null: false 
      t.integer :user_second_id, null: false 
      t.timestamps
    end
    add_index :friendships, :user_first_id
    add_index :friendships, :user_second_id
    add_index :friendships, [:user_first_id, :user_second_id], unique: true
  end
end
