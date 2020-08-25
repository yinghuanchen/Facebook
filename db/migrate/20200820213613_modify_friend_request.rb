class ModifyFriendRequest < ActiveRecord::Migration[5.2]
  def change
     remove_index :friend_requests, [:requester_id , :requestee_id]
     remove_index :friend_requests, [:requestee_id, :requester_id] 
     add_index :friend_requests, [:requester_id , :requestee_id],unique: true

  end
end
