class ModifyFriends < ActiveRecord::Migration[5.2]
  def change
    add_index(:friends,[:user_second_id, :user_first_id], unique: true)
  end
end
