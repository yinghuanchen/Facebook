class User < ApplicationRecord
    validates :username, :email, :gender,  :password_digest, :session_token, presence: true
    validates :email, :session_token, uniqueness: true
    validates :gender, inclusion: {in: ['Male', 'Female', 'Custom']}
    validates :password, length: { minimum: 6 }, allow_nil: true

    has_and_belongs_to_many :friends,
        class_name: :User, 
        join_table:  :friends, 
        foreign_key: :user_first_id, 
        association_foreign_key: :user_second_id


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
