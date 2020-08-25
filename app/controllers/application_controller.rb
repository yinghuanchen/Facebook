class ApplicationController < ActionController::Base
    #protect_from_forgery with: :exception
    #protect_from_forgery with: :null_session
    skip_before_action :verify_authenticity_token
    helper_method :current_user, :logged_in?

    private
    
    def login!(user) 
        session[:session_token] = user.reset_session_token!
        @current_user = user
    end 

    def current_user  
        @current_user ||= User.find_by(session_token: session[:session_token])
    end 

    def logged_in?
        !!current_user  
    end 

    def logout!
        current_user.reset_session_token! 
        session[:session_token] = nil 
        @current_user = nil
    end 

    def require_logged_in
        if !current_user 
            render json: { errors: ['invalid credentials'] }, status: 401
        end 
    end 

    def require_logged_out
        if logged_in? 
            render json: {errors: ["log out first"]}, status: 401
        end 
  end

end
