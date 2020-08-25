class Api::FriendRequestsController < ApplicationController
    before_action :require_logged_in, only: [:create, :delete]
    def create 
        requester_id, requestee_id = current_user.id, params[:requestee_id].to_i
        @friend_request = FriendRequest.new(requester_id: requester_id, requestee_id: requestee_id)
        if @friend_request.save 
            @user1 = User.find_by(id: current_user.id)
            @user2 = User.find_by(id: requestee_id)
            render "api/users/show_both"
        else 
            render json: @friend_request.errors.full_messages, status: 422
        end 
    end 

    def destroy 
        requester_id, requestee_id = params[:requester_id].to_i, params[:requestee_id].to_i
        if (current_user.id == requester_id || current_user.id == requestee_id) 
            @friend_request = FriendRequest.find_by(requester_id: requester_id, requestee_id: requestee_id )
            if @friend_request 
                @friend_request.destroy 
                @user1 = User.find_by(id: requester_id)
                @user2 = User.find_by(id: requestee_id ) 
                render "api/users/show_both" 
            else  
                render json: ["No friend request!"], status: 422
            end 
        else  
            render json: ["Not current user!"], status: 404
        end 
    end 

    private
    def friend_request_params
        params.require(:friend_request).permit(:requester_id, :requestee_id)
    end
end
