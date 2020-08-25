class FriendRequest < ApplicationRecord
    validates :requester_id, :requestee_id, presence: true 
    validates :requester_id, uniqueness: {scope: :requestee_id}
    
    belongs_to :requestee, 
        foreign_key: :requestee_id, 
        class_name: :User
        
    belongs_to :requester, 
        foreign_key: :requester_id, 
        class_name: :User

end
