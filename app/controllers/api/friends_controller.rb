class Api::FriendsController < ApplicationController
    before_action :require_logged_in, only: [:create, :delete]
    def create 
        friend_request = FriendRequest.find_by(requester_id: params[:friend][:user_second_id].to_i, requestee_id: current_user.id)
        if friend_request 
            @friend1 = Friend.new(friend_params) 
            tmp = {"friend": {"user_first_id": params[:friend][:user_second_id], "user_second_id": params[:friend][:user_first_id]}}
            @friend2 = Friend.new(tmp)
            if @friend1.save && @friend2.save   
                friend_request.destroy 
                @user = User.find_by(id: current_user.id)
                # show current user 
                render "api/users/show"
            else 
                render json: @friend.errors.full_messages, status: 422
            end 
        else
            render json: ["No frined request!"], status: 404     
        end
    end

    def delete 
        user_first_id, user_second_id = params[:user_first_id].to_i, params[:user_second_id].to_i 
        # if current_user.id == user_first_id || current_user.id ==  user_second_id 
        friendship1 = Friend.find_by(user_first_id: user_first_id, user_second_id: user_second_id) 
        friendship2 = Friend.find_by(user_first_id: user_second_id, user_second_id: user_first_id) 
        if(friendship1 && friendship2) 
                friendship1.destroy
                friendship2.destroy 
                @user = User.find_by(id: current_user.id)
                # show current user 
                render "api/users/show"
        else
            render json: ["No friendship exist!"], status: 404  
        end 
    end 

    private
    def friend_params
        params.require(:friend).permit(:user_first_id, :user_second_id)
    end
end
