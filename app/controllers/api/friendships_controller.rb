class Api::FriendshipsController < ApplicationController
    before_action :require_logged_in, only: [:create, :delete]
    def create 
        user_first_id, user_second_id = params[:friendship][:user_first_id].to_i, params[:friendship][:user_second_id].to_i 
        friend_request = FriendRequest.find_by(requester_id:  user_second_id, requestee_id: current_user.id)
        # debugger
        if friend_request 
            @friendship1 = Friendship.new(friendship_params) 
            # debugger 
            tmp = {"user_first_id": user_second_id, "user_second_id": user_first_id}
            @friendship2 = Friendship.new(tmp)
            if @friendship1.save && @friendship2.save   
                friend_request.destroy 
                @user1 = User.find_by(id: user_first_id)
                @user2 = User.find_by(id: user_second_id)
                # show current user 
                render "api/users/show_both"
            else 
                render json: @friend.errors.full_messages, status: 422
            end 
        else
            render json: ["No frined request!"], status: 404     
        end
    end

    def destroy 
        user_first_id, user_second_id = params[:friendship][:user_first_id].to_i, params[:friendship][:user_second_id].to_i 
        # if current_user.id == user_first_id || current_user.id ==  user_second_id 
        friendship1 = Friendship.find_by(user_first_id: user_first_id, user_second_id: user_second_id) 
        friendship2 = Friendship.find_by(user_first_id: user_second_id, user_second_id: user_first_id) 
        if(friendship1 && friendship2) 
                friendship1.destroy
                friendship2.destroy 
                @user1 = User.find_by(id: user_first_id)
                @user2 = User.find_by(id: user_second_id) 
                # show current user 
                render "api/users/show_both"
        else
            render json: ["No friendship exist!"], status: 404  
        end 
    end 

    private
    def friendship_params
        params.require(:friendship).permit(:user_first_id, :user_second_id)
    end
end
