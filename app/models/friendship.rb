class Friendship < ApplicationRecord
    validates :user_first_id, :user_second_id, presence: true 
    validates  :user_first_id, uniqueness: {scope: :user_second_id}
    belongs_to :user_first, foreign_key: :user_first_id, class_name: :User
    belongs_to :user_second, foreign_key: :user_second_id, class_name: :User 
end
