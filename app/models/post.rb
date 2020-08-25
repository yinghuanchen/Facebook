class Post < ApplicationRecord
    validates :body, :author_id, :wall_id, presence: true 

    belongs_to :wall, foreign_key: :wall_id, class_name: :User 
    belongs_to :author, foreign_key: :author_id, class_name: :User 
    has_many :user_friends, through: :author, source: :friends

    has_many :comments, foreign_key: :post_id, class_name: :Comment, dependent: :destroy
    has_many :commenters, through: :comments, source: :author  

    has_many :likes, foreign_key: :post_id, class_name: :Like, dependent: :destroy
    has_many :likers, through: :likes, source: :user
end
