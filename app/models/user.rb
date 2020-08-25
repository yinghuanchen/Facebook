class User < ApplicationRecord
    has_one_attached :profile_picture
    has_one_attached :cover_photo
    
    validates :username, :email, :gender,  :password_digest, :session_token, presence: true
    validates :email, :session_token, uniqueness: true
    validates :gender, inclusion: {in: ['Male', 'Female', 'Custom']}
    validates :password, length: { minimum: 6 }, allow_nil: true
    # Friendship
    has_many :friendships, foreign_key: :user_first_id, class_name: :Friendship
    has_many :friends, through: :friendships, source:  :user_second

    # Friend Request 
    has_many :out_friend_requests, 
        foreign_key: :requester_id, 
        class_name: :FriendRequest

    has_many :in_friend_requests, 
        foreign_key: :requestee_id, 
        class_name: :FriendRequest

    has_many :requestees, 
        through: :out_friend_requests, 
        source: :requestee

    has_many :requesters, 
        through: :in_friend_requests, 
        source: :requester    

    
    # Posts
    has_many :authored_posts, foreign_key: :author_id, class_name: :Post
    has_many :wall_posts, foreign_key: :wall_id, class_name: :Post

    # Comments
    has_many :authored_comments, foreign_key: :author_id, class_name: :Comment
    #has_many :wall_comments, through: :wall_posts, source: :comments

    # Likes 
    has_many :likes, foreign_key: :user_id, class_name: :Like 
    has_many :liked_posts, through: :likes, source: :post


    attr_reader :password

    
    after_initialize :ensure_session_token

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save
        return self.session_token
    end


    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.check_password?(password)
            return user 
        else  
            return nil 
        end   
    end

    def check_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    private

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64 
    end

end
