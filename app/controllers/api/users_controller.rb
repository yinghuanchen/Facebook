class Api::UsersController < ApplicationController
    before_action :require_logged_in, only: [:show, :index, :update]
    before_action :require_logged_out, only: [:create]
    def index
        @users = User.all
        render :index
    end
    
    def show 
        @user = User.find_by(id: params[:id])
        render :show
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            # debugger
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @user = User.find_by(id: params[:id])
        if @user.id == current_user.id && @user.update(user_params)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end




    private
    def user_params
        params.require(:user).permit(:username, :email, :gender, :password, :cover_photo, :profile_picture)
    end
end
