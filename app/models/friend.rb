class Friend < ApplicationRecord
    validates :user_first_id, :user_second_id, presence: true 
    validates  :user_first_id, uniqueness: {scope: :user_second_id}
    validatea :user_second_id, uniqueness: {scope: :user_first_id} 
end 