class Comment < ApplicationRecord
    validates :author_id, :post_id, :body, presence: true 

    belongs_to :user, foreign_key: :author_id, class_name: :User
    belongs_to :post, foreign_key: :post_id, class_name: :Post
    has_one :wall, through: :wall, source: :post  
end
